const express = require('express');

const routes = express.Router();

//Controllers
const ongController = require('./controllers/ongController');
const sessionController = require('./controllers/sessionController');
const profileController = require('./controllers/profileController');
const incidentController = require('./controllers/incidentController');

routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.store);

routes.get('/incidents', incidentController.index);
routes.post('/incidents', incidentController.store);
routes.delete('/incidents/:id', incidentController.delete);

routes.get('/profile', profileController.index);

routes.post('/session', sessionController.create);


module.exports = routes;