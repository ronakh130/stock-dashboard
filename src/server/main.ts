import express, { Application, ErrorRequestHandler } from 'express';
import { MiddlewareFunction } from './types';
import cors from 'cors';
import api from './routes';

const port = 3000;
const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const pageNotFoundHandler: MiddlewareFunction = (req, res) => res.status(404).send('Sorry, Page not found');

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An unknown server error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(err);
  return res.status(errorObj.status).json(errorObj.message);
};

app.use('/api', api);
app.use(pageNotFoundHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server listening on port: ${port} \n`);
});

export default app;