import { Router } from 'express';
import multer from 'multer';
import uploadConfig from './config/upload';

import SessionController from './controllers/SessionController';
import EventoController from './controllers/EventoController';
import DashboardController from './controllers/DashboardController';


const routes = new Router();
const upload = multer(uploadConfig);

routes.post('/sessions', SessionController.store);

routes.post('/evento', upload.single('thumbnail'), EventoController.store);
routes.get('/evento', EventoController.index);
routes.put('/evento/:evento_id', upload.single('thumbnail'), EventoController.update);
routes.delete('/evento', EventoController.destroy);

routes.get('/dashboard', DashboardController.show);

export default routes;

