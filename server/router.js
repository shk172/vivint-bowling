import express, { Router } from 'express';
import { playerGet, playerGetWithId, playerPost, playerPut, playerDelete, playerDeleteWithId } from './controllers/playerController';
import Player from './models/player';

const router = Router();

router.route('/players')
	.get(playerGet);

///players
router.get('/players/:id', playerGetWithId);

router.post('/players', playerPost);

router.delete('/players', playerDelete);

router.delete('/players/:id', playerDeleteWithId);

export default router;
