import express from 'express';
import { watchlistRouter } from './watchlist';
import { stockDataRouter } from './stock-data';

export const router = express.Router();

router.use('/watchlist', watchlistRouter);
router.use('/stock-data', stockDataRouter);

export default router;
