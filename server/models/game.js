import mongoose, {Schema} from 'mongoose';

var gameSchema = new Schema({
	player: {
    type: Schema.Types.ObjectId,
    ref: 'Player',
    required: true,
  },

	frames:{
    type: [{
      type: Schema.Types.ObjectId,
      required: true,
    }],
    validate:[frameLimit, 'The number of frames do not match the required 10.']
  },

  totalScore: Number,
  currentFrame: Number,
  gameOver: Boolean,
})

function frameLimit(array){
  return array.length === 10;
}

export default mongoose.model('Game', gameSchema);
