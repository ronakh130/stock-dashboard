import express, { Router } from 'express';
import { stockDataController } from '../controllers/stock-data';
import { watchlistController } from '../controllers/watchlist';

export const stockDataRouter: Router = express.Router();

stockDataRouter.get(
  '/poll-watchlist',
  watchlistController.getWatchlist,
  stockDataController.pollWatchlistStocks,
  (req, res) => {
    res.status(200).json(res.locals.newList);
  }
);
