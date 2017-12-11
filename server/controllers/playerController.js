import Player from '../models/player';
import moment from 'moment';

export const playerGet = (req, res, next) => {
	Player.find().lean().exec((err, players) => {
		res.json({ players })
	});
}

export const playerGetWithId = (req, res, next) => {
	Player.findById(req.params.id, function(err, post){
		if (err) console.log("Error getting player from the server");
		res.json(post);
	})
}

export const playerPost = (req, res, next) => {
	Player.create(req.body, function(err, post){
		if(err) {
      console.log("Error posting player in the server");
    }
    else{
      post.save(function (err){
        if(err) console.log(err);
      })
    }
		res.json(post);
	});
};


export const playerPut = (req, res, next) => {
	Player.findByIdAUpdate(req.params.id, req.body, function(err, post){
		if(err) console.log("Error with put command in the server");
		res.json(post);
	});
};

export const playerDelete = (req, res, next) =>{
  Player.remove().catch(function(err){
    console.log("Error removing document from the server");
  });
}

export const playerDeleteWithId = (req, res, next) => {
	Player.deleteOne(req.body, function(err){
		if(err) console.log("Error deleting player in the server");
	});
};
