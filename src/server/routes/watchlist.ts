import express, { Router } from 'express';
import { watchlistController } from '../controllers/watchlist';
import { stockDataController } from '../controllers/stock-data';

export const watchlistRouter: Router = express.Router();

watchlistRouter.get('/', watchlistController.getWatchlist, (req, res) => {
  res.status(200).json(res.locals.watchlist);
});

watchlistRouter.post(
  '/:symbol',
  watchlistController.getWatchlist,
  stockDataController.getDataByStock,
  watchlistController.addStockToWatchlist,
  (req, res) => {
    res.status(201).json(res.locals.newList);
  }
);

watchlistRouter.delete(
  '/:symbol',
  watchlistController.getWatchlist,
  watchlistController.deleteStockFromWatchlist,
  (req, res) => {
    res.status(200).json(res.locals.newList);
  }
);
