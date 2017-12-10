import mongoose, {Schema} from 'mongoose';

var contentSchema = new Schema({
	title: {
		type: String,
		required: true,
	},

	genre: {
		type: String,
		enum: ['Literature', 'Science', 'History', 'Art', 'Language'],
		required: true,
	},

	numSubscribers: {
		type: Number,
		min: 0,
		default: 0
	},

	creator: String,
})

contentSchema.virtual('url').get(function(){
	return '/content/' + this._id;
})

export default mongoose.model('Content', contentSchema);
