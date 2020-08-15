import { Express } from 'express';
import { post, remove } from './controllers/subscriptionController';

const initializeRoutes = (app: Express): void => {
  app.post('/subscription', post);
  app.delete('/subscription', remove);
};

export default initializeRoutes;
