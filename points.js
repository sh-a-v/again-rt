export default [
  {
    name: 'admin',
    path: './client/admin/init.js',
    url : '/admin'
  },
  {
    name: 'again',
    path: './client/again/init.js',
    url : '/'
  }
];

export let commonVendor = [
  'react',
  'react-dom',
  'react-router',
  'react-redux',
  'redux',
  'redux-thunk'
];

export let serverPoint = './server/server.js';
