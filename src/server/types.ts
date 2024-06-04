import { NextFunction, Request, Response } from 'express';

export type MiddlewareFunction = (
  req: Request,
  res: Response,
  next: NextFunction
) => void;

export type ErrorHandlerFunction = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => void;

interface BaseStock {
  symbol: string;
  displayName?: string;
}

export interface Stock extends BaseStock{
  id: number;
  currentPrice?: number;
}

export interface StockAPIResponse extends BaseStock{
  regularMarketPrice: number;
}
