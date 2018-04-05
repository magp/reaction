const path = require('path');
const webpack = require('webpack'); // eslint-disable-line import/no-extraneous-dependencies
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// eslint-disable-line import/no-extraneous-dependencies max-len

module.exports = {
  mode: 'production',
  context: path.join(__dirname, '../app'),
  target: 'web',
  entry: [
    './client/client.jsx',
  ],
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'client.js',
    publicPath: './',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
          filename: 'vendor.client.js',
        },
      },
    },
    // minimizer: [
    //   new UglifyJsPlugin({
    //     cache: true,
    //     parallel: true,
    //     uglifyOptions: {
    //       compress: false,
    //       ecma: 6,
    //       mangle: true
    //     },
    //     sourceMap: true
    //   }),
    // ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader?presets[]=react'],
        include: path.join(__dirname, '../app'),
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  // devtool: 'source-map',
};
