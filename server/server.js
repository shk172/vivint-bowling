import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';

import config from './config';
import router from './router';
import bodyParser from 'body-parser';
//import populate from '../tests/populate';

mongoose.connect(config.mongoURL, (error)=>{
	if(error){
		console.log('Please make sure MongoDb is installed and running!');
    console.log(config.mongoURL);
    console.log(error);
		throw error;
	}
});

const app = express();

app.get('/', (req, res)=>{
	res.send("Hello, this is the server for the bowling app");
})

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Methods", "POST, GET, PATCH, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use('/v1', router);

app.listen(config.port, function() {
  console.log('Node app is running on port', config.port);
});
