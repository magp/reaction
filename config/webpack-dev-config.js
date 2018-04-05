import webpack from 'webpack'; // eslint-disable-line import/no-extraneous-dependencies
import path from 'path'; // eslint-disable-line import/no-extraneous-dependencies

module.exports = {
  mode: 'development',
  devtool: 'eval',
  entry: {
    player: [
      'react-hot-loader/patch',
      'webpack-hot-middleware/client',
      './devfiles/clientDev.jsx',
    ],
    // code splitting: we take all of our vendor code and
    // put it in a separate bundle (vendor.min.js)
    // this way it will have better caching/cache hits since it changes infrequently
    // vendor: [
    // local packages
    // npm packages are added to vendor code separately in splitChunks config below
    // ],
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'client.js',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  module: {
    rules: [
      // {
      //   test: /\.css$/,
      //   use: ['style-loader', 'css-loader'],
      // },
      {
        test: /\.html$/,
        use: 'raw-loader',
      },
      {
        test: /^(?!.*\.{test,min}\.jsx?$).*\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader?presets[]=react,plugins[]=react-hot-loader/babel',
        },
      },
    ],
  },
  resolve: {
    modules: [
      path.join(__dirname, 'app'),
      path.join(__dirname, 'app/css'),
      'node_modules',
    ],
    alias: {
      // external libraries
      jquerynotify: path.join(__dirname, 'app/js/jquery.notify.min'),
      clipboard: path.join(__dirname, 'app/js/clipboard.min'),

      // directory alias to shorten template paths
      templates: path.join(__dirname, 'app/templates'),
    },
    extensions: ['.js', '.jsx'],
  },
  watchOptions: {
    aggregateTimeout: 300,
  },
};
