import mongoose, {Schema} from 'mongoose';

var gameSchema = new Schema({
  frames:{
    type: [{
      type: Schema.Types.Mixed,
      required: true,
    }],
  },

  totalScore: Number,
  currentFrame: Number,
  gameOver: Boolean,
})

function frameLimit(array){
  return array.length === 10;
}

export default mongoose.model('Game', gameSchema);
