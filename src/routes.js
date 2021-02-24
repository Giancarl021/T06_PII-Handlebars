const express = require('express');
const routes = express.Router();

const HomeController = require('./controllers/Home');
const InsertController = require('./controllers/Insert');
const SearchController = require('./controllers/Search');

const RedirectController = require('./controllers/Redirect');

// API
routes.post('/api/insert', InsertController.api);
// Web
routes.get('/', HomeController);
routes.get('/insert', InsertController.view);
routes.get('/search', SearchController);
routes.all('*', RedirectController);

module.exports = routes;