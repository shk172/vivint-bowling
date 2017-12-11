import mongoose, {Schema} from 'mongoose';

var playerSchema = new Schema({
  playerName: {
    type: String,
    required: true,
    unique: true
  },

  games: [{
    type: Schema.Types.Mixed,
    ref: 'Game'
  }],
})

export default mongoose.model('Player', playerSchema);
