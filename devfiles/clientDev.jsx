import { AppContainer } from 'react-hot-loader';
import React from 'react';
import { hydrate } from 'react-dom';

import ClientDevRoutes from './clientDevRoutes';

hydrate(
  <AppContainer>
    <ClientDevRoutes />
  </AppContainer>,
  document.getElementById('app'),
);


if (module.hot) {
  module.hot.accept('./clientDevRoutes', () => {
    const NextApp = require('./clientDevRoutes').default; // eslint-disable-line global-require
    hydrate(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      document.getElementById('app'),
    );
  });
}
