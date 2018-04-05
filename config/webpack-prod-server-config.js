const path = require('path');
const webpack = require('webpack'); // eslint-disable-line import/no-extraneous-dependencies
const nodeExternals = require('webpack-node-externals'); // eslint-disable-line import/no-extraneous-dependencies

module.exports = {
  mode: 'production',
  context: path.join(__dirname, '../app'),
  target: 'node',
  entry: './server/server.jsx',
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'server.js',
  },
  node: {
    __dirname: false,
    __filename: false,
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
    extensions: ['.js', '.jsx', '.json'],
  },
  externals: nodeExternals(),
//  devtool: 'source-map',
};
