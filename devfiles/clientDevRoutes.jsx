import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from '../app/routes/Routes';

function ClientRoutesDev() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default ClientRoutesDev;
