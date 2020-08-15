import { Express } from 'express';
import { post } from './controllers/subscriptionController';

const initializeRoutes = (app: Express): void => {
  app.post('/subscription', post);
};

export default initializeRoutes;
