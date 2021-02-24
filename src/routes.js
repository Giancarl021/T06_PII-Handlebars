const express = require('express');
const routes = express.Router();

const HomeController = require('./controllers/Home');
const RedirectController = require('./controllers/Redirect');

routes.get('/', HomeController);
routes.all('*', RedirectController);

module.exports = routes;