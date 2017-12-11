import mongoose from 'mongoose';
import Content from '../server/models/content';
import User from '../server/models/user';

function populate(){
	mongoose.connect('mongodb://localhost:27017');
	for(let i = 0; i < 50; i++){
		var testContent = {
			title: `test${i}`,

			genre: 'Literature',

			numSubscribers: 3,

			creator: 'SangHee',
		}
		var newContent = new Content(testContent);
		newContent.save();
	}

	console.log("100 test contents have been added");
	var SangHee = {
		firstName: 'SangHee',
		lastName: 'Kim',
		userName: 'shk',
		password: 'shk'
	}
	var newUser = new User(SangHee);
	newUser.save();

	var AliKhan = {
		firstName: 'Ali',
		lastName: 'Khan',
		userName: 'ak',
		password: 'ak'
	}
	var newUser = new User(AliKhan);
	newUser.save();

	var AliA = {
		firstName: 'Ali',
		lastName: 'A',
		userName: 'aa',
		password: 'aa'
	}
	var newUser = new User(AliA);
	newUser.save();

	mongoose.disconnect();
}

export default populate();
