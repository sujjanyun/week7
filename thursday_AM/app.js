'use strict';
const HTTP = require('http');

const HOSTNAME = '127.0.0.1',
    PORT = 3333;

const express = require('express'),
    es6Renderer = require('express-es6-template-engine');

const app = express();

app.engine('html', es6Renderer);
app.set('views', 'templates');
app.set('view engine', 'html');

// setup the public folder for all our static items
app.use(express.static['public']);

const SERVER = HTTP.createServer(app);

SERVER.listen(PORT, HOSTNAME, () => {
    console.log(`Server is running on http://${HOSTNAME}:${PORT}`);
});

const rootController = require('./routes/index'),
    ceosController = require('./routes/ceos');

app.use('/', rootController);
app.use('/ceos', ceosController);