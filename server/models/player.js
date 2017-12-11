import mongoose, {Schema} from 'mongoose';

var playerSchema = new Schema({
  playerName: {
    type: String,
    required: true,
    unique: true
  },

  frames: {
    type: [{
      type: Schema.Types.ObjectId,
      ref: 'Frame'
    }],
    validate: [frameLimit, 'The number of frames does not match the required 10']
  }
})

function frameLimit(array){
  return array.length === 10;
}

export default mongoose.model('Player', playerSchema);
