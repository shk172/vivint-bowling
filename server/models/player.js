import mongoose, {Schema} from 'mongoose';

var playerSchema = new Schema({
  name: {
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
