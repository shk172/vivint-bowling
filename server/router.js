import express, { Router } from 'express';
import { playerGet, playerPost, playerPut, playerDelete, playerDeleteWithId } from './controllers/playerController';
import Player from './models/player';

const router = Router();

router.get('/players', playerGet);

router.post('/players', playerPost);

router.delete('/players', playerDelete);

export default router;
