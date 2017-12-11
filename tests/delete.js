import mongoose from 'mongoose';
import Content from '../server/models/content';
import User from '../server/models/user';
mongoose.connect('mongodb://localhost:27017');
Content.remove({}, function(err){
	console.log("All content entries have been removed");
	User.remove({}, function(err){
		console.log("All user entries have been removed");
		mongoose.disconnect();
	})
});
