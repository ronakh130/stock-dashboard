import * as fs from 'node:fs';
import { Stock } from '../server/types';

export function getWatchedStocks() {
  const { data } = JSON.parse(fs.readFileSync('../db/watchlist.json').toString());
  /*
  Sample SQL for a real db:

  SELECT * 
  FROM watchlist 
  WHERE user_id = '${userId}';

  */

  return data;
}

export function saveWatchedStock(watchlist: Stock[], stock: Stock) {
  const newList = { data: [...watchlist, stock] };
  fs.writeFileSync('../db/watchlist.json', JSON.stringify(newList));
  /*
  Sample SQL for a real db:

  INSERT INTO watchlist (user_id, symbol, displayName, currentPrice)
  VALUES ('${userId}', '${symbol}', '${displayName}', ${currentPrice});

  */

  return newList;
}

export function deleteWatchedStock(watchlist: Stock[], symbol: string) {
  const newList = { data: watchlist.filter((stock) => stock.symbol !== symbol) };
  fs.writeFileSync('../db/watchlist.json', JSON.stringify(newList));
  /*
  Sample SQL for a real db:

  DELETE FROM watchlist 
  WHERE user_id = '${userId}' 
  AND stock_id = '${stockId}'; (can )

  */

  return newList;
}

export function updateWatchlist(watchlist: Stock[]) {
  const newList = { data: watchlist };
  fs.writeFileSync('../db/watchlist.json', JSON.stringify(newList));
  /*
  Sample SQL for a real db:

  const values = watchlist.map(stock => `('${stock.userId}', '${stock.symbol}', '${stock.displayName}', ${stock.currentPrice})`).join(', ');
  const sqlQuery = `INSERT INTO watchlist (user_id, symbol, displayName, currentPrice) VALUES ${values};`;
  */

  return newList;
}
