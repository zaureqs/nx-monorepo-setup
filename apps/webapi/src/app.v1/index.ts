import express, { Response, Request, NextFunction } from 'express';
import appRouter from './routers';
import logger from '../_middlewares/logger';

const nodeEnv = process.env.NODE_ENV || 'development';

const app = express();

app.route('/').get((_req: Request, res: Response) => {
  res.send('app router');
});

app.use(express.json());

app.use(logger);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

app.use('/api/v1', appRouter);

// Global error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error('Error:', err.message);
  console.error('Stack:', err.stack);
  
  res.status(500).json({
    status: 'error',
    message: nodeEnv === 'production' 
      ? 'Internal server error' 
      : err.message,
    ...(nodeEnv !== 'production' && { stack: err.stack })
  });
});

// Catch 404 and forward to error handler
app.use((req: Request, res: Response) => {
  res.status(404).json({
    status: 'error',
    message: 'Route not found'
  });
});

export default app;
