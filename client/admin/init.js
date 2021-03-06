import React from 'react';
import ReactDom from 'react-dom';

import { clientContainerCreator } from 'shared/tools/container-creator';
import translator from 'shared/translator/translator-counterpart';
import store from 'shared/stores/admin-store';
import routes from 'shared/routes/admin-routes';


ReactDom.render(
  clientContainerCreator({store, routes, translator}),
  document.getElementById('app-container')
);
