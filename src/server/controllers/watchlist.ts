import { MiddlewareFunction } from '../types';
import { deleteWatchedStock, getWatchedStocks, saveWatchedStocks } from '../../db/utils';

interface WatchlistController {
  getWatchlist: MiddlewareFunction;
  addStockToWatchlist: MiddlewareFunction;
  deleteStockFromWatchlist: MiddlewareFunction;
}

export const watchlistController: WatchlistController = {
  getWatchlist(req, res, next) {
    res.locals.watchlist = getWatchedStocks();
    return next();
  },

  addStockToWatchlist(req, res, next) {
    const { stock, watchlist } = res.locals;
    res.locals.newList = saveWatchedStocks(watchlist, stock);
    return next();
  },

  deleteStockFromWatchlist(req, res, next) {
    const { symbol } = req.params;
    const { watchlist } = res.locals;
    res.locals.newList = deleteWatchedStock(watchlist, symbol.toUpperCase());
    return next();
  },
};
