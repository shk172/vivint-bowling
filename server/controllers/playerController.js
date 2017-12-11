import Player from '../models/player';
import moment from 'moment';

export const playerGet = (req, res, next) => {
	Player.find().lean().exec((err, players) => {
		res.json({ players: players })
	});
}

export const playerPost = (req, res, next) => {
	Player.create(req.body, function(err, post){
		if(err) {
      console.log("Error posting player in the server");
			console.log(err);
    }
    else{
			console.log(post);
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
