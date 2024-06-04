import * as fs from 'node:fs';
import { Stock } from '../server/types';

export function getWatchedStocks() {
  const { data } = JSON.parse(fs.readFileSync('../db/watchlist.json').toString());

  return data;
}

export function saveWatchedStocks(watchlist: Stock[], stock: Stock) {
  const newList = { data: [...watchlist, stock] };
  fs.writeFileSync('../db/watchlist.json', JSON.stringify(newList));

  return newList;
}

export function deleteWatchedStock(watchlist: Stock[], symbol: string){
  const newList = { data: watchlist.filter(stock => stock.symbol !== symbol)};
  fs.writeFileSync('../db/watchlist.json', JSON.stringify(newList));

  return newList;
}
