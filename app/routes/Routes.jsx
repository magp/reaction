import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../components/Home';
import About from '../components/About';
import NotFound from '../components/NotFound';

function Routes() {
  return (
    <Switch>
      <Route exact path="/"><Home /></Route>
      <Route exact path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default Routes;
