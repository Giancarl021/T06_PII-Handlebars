const express = require('express');
const cors = require('cors');
const handlebars = require('express-handlebars');
const routes = require('./routes');
const locate = require('./util/locate');

const app = express();

app.use(cors());
app.use(express.json());

app.engine('hbs', handlebars({ extname: '.hbs', defaultLayout: 'main' }));
app.set('view engine', 'hbs');
app.set('views', locate('src/web/views'));

app.use('/assets', express.static(locate('src/web/assets')));

app.use(routes);

module.exports = app;