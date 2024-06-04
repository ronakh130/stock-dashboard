import { MiddlewareFunction, Stock } from '../types';
import yahooFinance from 'yahoo-finance2';
import { buildStock } from '../utils';
import { updateWatchlist } from '../../db/utils';

interface StockDataController {
  pollWatchlistStocks: MiddlewareFunction;
  getDataByStock: MiddlewareFunction;
}

export const stockDataController: StockDataController = {
  async pollWatchlistStocks(req, res, next) {
    const { watchlist } = res.locals;
    try {
      const promises = watchlist.map(async (stock: Stock) => {
        const data = await yahooFinance.quote(stock.symbol, {
          fields: ['symbol', 'displayName', 'regularMarketPrice'],
        });
        return buildStock(data);
      });

      const newList = await Promise.all(promises);
      updateWatchlist(newList);
      res.locals.newList = newList;
    } catch (e) {
      return next(e);
    }
    return next();
  },

  async getDataByStock(req, res, next) {
    const { symbol } = req.params;
    try {
      const data = await yahooFinance.quote(symbol, {
        fields: ['symbol', 'displayName', 'regularMarketPrice'],
      });

      if (!data) {
        return next({
          status: 404,
          log: 'Error in stockDataController.getDataByStock.',
          message: {
            err: 'No data found for stock: ' + symbol,
          },
        });
      }

      res.locals.stock = buildStock(data);
    } catch (e) {
      return next(e);
    }
    return next();
  },
};
