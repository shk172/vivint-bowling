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

export const playerPatch = (req, res, next) =>{
	console.log("hello");
	console.log(req.params);
	console.log(req.body);
	Player.findOneAndUpdate({name: req.body.name}, req.body, function(err, player){
		if(!player)
			return next(new Error('Could not load players'));
		else{
			console.log(player);
		}
	})
}

export const playerDelete = (req, res, next) =>{
  Player.remove().catch(function(err){
    console.log("Error removing document from the server");
  });
}
