var webpack = require('webpack');
var DashboardPlugin = require('webpack-dashboard/plugin');
var merge = require('webpack-merge');

var common = {
  entry: ['babel-polyfill', './src/app.js'],
  output: {
    path: './build',
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
};

var production = {
  output: {
    publicPath: '/knitsights'
  }
};

var development = {
  devtool: 'source-map',
  devServer: {
    contentBase: './build',
    historyApiFallback: true,
    hot: true,
    inline: true,
    port: 8081
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin({
      multiStep: true
    }),
    new DashboardPlugin()
  ]
};

var buildTarget = process.env.npm_lifecycle_event;

switch(buildTarget) {
  case 'build':
    module.exports = merge(common, production);
    break;
  default:
    module.exports = merge(common, production);
    break;
}
