import Content from '../models/content';
import moment from 'moment';

export const contentGet = (req, res, next) => {
	Content.find().lean().exec((err, contents) => {
		res.json(contents)
	});
}

export const contentGetWithId = (req, res, next) => {
	Content.findById(req.params.id, function(err, post){
		if (err) console.log("Error getting content from the server");
		res.json(post);
	})
}

export const contentPost = (req, res, next) => {
	Content.create(req.body, function(err, post){
		if(err) {
			console.log("Error posting content in the server");
			console.log(err);
		}

		else{
			console.log("content posted");
		}

		res.json(post);
	});
};

export const contentPut = (req, res, next) => {
	Content.findByIdAUpdate(req.params.id, req.body, function(err, post){
		if(err) console.log("Error with put command in the server");
		res.json(post);
	});
};

export const contentDelete = (req, res, next) => {
	Content.remove().catch(function(err){
		console.log("Error removing document from the server");
	});
}

export const contentDeleteWithId = (req, res, next) => {
	Content.deleteOne(req.body, function(err){
		if(err) console.log("Error deleting content in the server");
	});
};
