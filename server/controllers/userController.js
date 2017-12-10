import User from '../models/user';
import moment from 'moment';

export const userGet = (req, res, next) => {
	User.find().lean().exec((err, users) => {
		res.json({ users: users})
	});
}

export const userGetWithId = (req, res, next) => {
	User.findById(req.params.id, function(err, post){
		if (err) console.log("Error getting user from the server");
		res.json(post);
	})
}

export const userPost = (req, res, next) => {
	User.create(req.body, function(err, post){
		if(err) {
      console.log("Error posting user in the server");
    }
    else{
      post.save(function (err){
        if(err) console.log(err);
      })
    }
		res.json(post);
	});
};


export const userPut = (req, res, next) => {
	User.findByIdAUpdate(req.params.id, req.body, function(err, post){
		if(err) console.log("Error with put command in the server");
		res.json(post);
	});
};

export const userDelete = (req, res, next) =>{
  User.remove().catch(function(err){
    console.log("Error removing document from the server");
  });
}

export const userDeleteWithId = (req, res, next) => {
	User.deleteOne(req.body, function(err){
		if(err) console.log("Error deleting user in the server");
	});
};
