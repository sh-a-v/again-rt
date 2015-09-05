import _ from 'lodash';

let envs = [
  'development',
  'pre-production',
  'production'
];

if (process && process.argv[2] && _.includes(envs, process.argv[2])) {
  global.ENV = process.argv[2];
}

export default {
  isDevelopment() {
    return global.ENV === envs[0];
  },

  isPreProduction() {
    return global.ENV === envs[1];
  },

  isProduction() {
    return global.ENV === envs[2];
  }
};
