import { AppContainer } from 'react-hot-loader';
import React from 'react';
import { render } from 'react-dom';

import ClientDevRoutes from './clientDevRoutes';

render(
  <AppContainer>
    <ClientDevRoutes />
  </AppContainer>,
  document.getElementById('app'),
);


if (module.hot) {
  module.hot.accept('./clientDevRoutes', () => {
    const NextApp = require('./clientDevRoutes').default; // eslint-disable-line global-require
    render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      document.getElementById('app'),
    );
  });
}
