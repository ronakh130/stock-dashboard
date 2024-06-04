import { MiddlewareFunction, Stock } from '../types';
import yahooFinance from 'yahoo-finance2';
import { buildStock } from '../utils';

interface StockDataController {
  getDataByStock: MiddlewareFunction;
}

export const stockDataController: StockDataController = {
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
