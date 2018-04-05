require('babel-core/register')({ // eslint-disable-line import/no-extraneous-dependencies
  presets: [
    'react',
    ['env', { targets: { node: 'current' } }],
  ],
});

require('./serverDev.jsx');
