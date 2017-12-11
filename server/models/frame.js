import mongoose, {Schema} from 'mongoose';

var frameSchema = new Schema({
	game: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: 'Game',
	}
	frameNumber: {
		required: true,
		enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		type: Number,
	},
	rollNumber: Number,
	frameFinished: Boolean,

	strike: Boolean,
	spare: Boolean,

	firstRoll: String,
	firstRollValue: Number,
	secondRoll: String,
	secondRollValue: Number,
})

export default mongoose.model('Frame', frameSchema);
