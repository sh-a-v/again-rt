import _ from 'lodash';
import cache from 'memory-cache';

let envs = [
  'development',
  'pre-production',
  'production'
];

if (process && process.argv[2] && _.includes(envs, process.argv[2])) {
  cache.put('env', process.argv[2]);
}

export default {
  getEnv() {
    console.log('@@@@@@@@@@', cache.get('env'));
    //return nodeCache.get('env');
    return 'production';
  },

  isDevelopment() {
    return this.getEnv() === envs[0];
  },

  isPreProduction() {
    return this.getEnv() === envs[1];
  },

  isProduction() {
    return this.getEnv() === envs[2];
  }
};
