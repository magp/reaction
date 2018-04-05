import express from 'express';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
// import 'source-map-support/register'; // eslint-disable-line import/no-extraneous-dependencies

import Routes from '../routes/Routes';
import render from './render';

const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || 3030;
const ENV = process.env.NODE_ENV || 'production';

const app = express();

app.use('/dist', express.static('./dist'));

app.use('*', (req, res) => {
  const context = {};
  const HTML = render((
    <StaticRouter context={context} location={req.originalUrl}>
      <Routes />
    </StaticRouter>
  ));
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
