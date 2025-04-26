import { Request, Response, Router } from 'express';
import userRouter from './user';
const app: Router = Router();

app.route('/').get((_req: Request, res: Response) => {
  res.send('app router');
});

app.use('/users', userRouter);

export default app;
