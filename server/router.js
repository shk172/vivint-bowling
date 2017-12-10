import express, { Router } from 'express';
import { contentGet, contentGetWithId, contentPost, contentPut, contentDelete, contentDeleteWithId } from './controllers/contentController';
import { userGet, userGetWithId, userPost, userPut, userDelete, userDeleteWithId } from './controllers/userController';
import content from './models/content';
import User from './models/user';

const router = Router();

router.route('/contents')
	.get(contentGet);

router.route('/users')
	.get(userGet);

///contents
router.get('/contents/:id', contentGetWithId);

router.post('/contents', contentPost);

router.put('/contents:id', contentPut);

router.delete('/contents', contentDelete);

router.delete('/contents/:id', contentDeleteWithId);


///Users
router.get('/users/:id', userGetWithId);

router.post('/users', userPost);

router.delete('/users', userDelete);

router.delete('/users/:id', userDeleteWithId);

export default router;
