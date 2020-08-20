'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');

require('dotenv').config();
const app = new express();
const port = process.env.PORT;
const routes = require('./routes/routes');

app.use(helmet());
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:100000}));

app.use('/', routes);

const server = app.listen(port, function() {
    console.log(`Serter listen in port ${port}`);
});
