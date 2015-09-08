import _ from 'lodash';

import env from './env/env.js';

let defaultConfig = {
  localAddress   : 'https://localhost:8080',
  expressPort    : 8080,
  assetsPath     : '/assets',
  apiPath        : '/api',
  serverRendering: true
};

let developmentConfig = {
  expressPort    : 3000,
  webpackPort    : 3001,
  serverRendering: false
};

let preProductionConfig = {
  expressPort    : 3000,
  serverRendering: false
};

let productionConfig = {
  serverRendering: true
};

let currentConfig = {};

if (env.isDevelopment()) {
  currentConfig = developmentConfig;
} else if (env.isPreProduction()) {
  currentConfig = preProductionConfig;
} else if (env.isProduction()) {
  currentConfig = productionConfig;
}

export default _.merge(defaultConfig, currentConfig);
