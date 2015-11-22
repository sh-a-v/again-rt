import React from 'react';
import { Route } from 'react-router';

import App from 'client/admin/components/app';

let routes = (
  <Route path="/admin" component={App}>
  </Route>
);

export default routes;
