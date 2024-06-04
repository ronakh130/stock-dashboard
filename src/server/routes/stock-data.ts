import express, { Router } from 'express';
import { stockDataController } from '../controllers/stock-data';

export const stockDataRouter: Router = express.Router();

stockDataRouter.get('/stock-data', stockDataController.getAllStockData, (req, res) => {
  res.status(200).json();
});
