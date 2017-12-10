import mongoose, {Schema} from 'mongoose';

var userSchema = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },

  firstName: {
    type: String,
    required: true
  },

  lastName: {
    type: String,
    required: true
  },

  //For validation/notification purposes. Not required just in case
  email: String,

  inProgressContents: [{
    type: Schema.Types.ObjectId,
    ref: 'Content'
  }],

  completedContents: [{
    type: Schema.Types.ObjectId,
    ref: 'Content'
  }],

  friends: [{
    _id: {type: Schema.Types.ObjectId, ref: 'User'}
  }],
})

export default mongoose.model('User', userSchema);
