import React from 'react';
import { Route } from 'react-router';

import App from 'client/admin/components/app';
import Editor from 'client/admin/components/editor'

let routes = (
  <Route path="/admin" component={App}>
    <Route path="editor" component={Editor}></Route>
  </Route>
);

export default routes;
