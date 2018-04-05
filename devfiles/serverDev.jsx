import express from 'express';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import webpack from 'webpack'; // eslint-disable-line import/no-extraneous-dependencies

import config from '../config/webpack-dev-config';
import Routes from '../app/routes/Routes';
import render from '../app/server/render';

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3032;
const ENV = process.env.NODE_ENV || 'development';

const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, { // eslint-disable-line import/no-extraneous-dependencies
  noInfo: true,
  publicPath: config.output.publicPath,
}));

app.use(require('webpack-hot-middleware')(compiler)); // eslint-disable-line import/no-extraneous-dependencies

app.use('*', (req, res) => {
  const context = {};
  const HTML =
  render(<StaticRouter context={context} location={req.originalUrl}><Routes /></StaticRouter>);
  res.set('content-type', 'text/html');
  res.status(200).end(HTML);
});

app.listen(PORT, HOST, (err) => {
  if (err) {
    console.log(err); // eslint-disable-line no-console
    return;
  }
  console.info(`Listening at http://${HOST}:${PORT} [${ENV}]`); // eslint-disable-line no-console
});
