import { Router } from 'express';

import OngController from './controllers/OngController';

const routes = new Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.store);

export default routes;
