import express from 'express';
import { watchlistRouter } from './watchlist';

export const router = express.Router();

router.use('/watchlist', watchlistRouter);

export default router;
