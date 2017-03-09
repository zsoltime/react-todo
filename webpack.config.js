const webpack = require('webpack');
const path = require('path');

const babelSettings = {
  presets: ['react', 'es2015', 'stage-0'],
};

module.exports = {
  entry: [
    './app/app.jsx',
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js',
  },
  resolve: {
    root: __dirname,
    modulesDirectories: [
      'node_modules',
      './app/components',
      './app/api',
    ],
    alias: {
      applicationStyles: 'app/styles/app.sass',
    },
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        loaders: [
          `babel-loader?${JSON.stringify(babelSettings)}`,
          'eslint-loader',
        ],
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
      },
    ],
  },
  sassLoader: {
    includePaths: [
      path.resolve(__dirname, './node_modules/foundation-sites/scss'),
    ],
  },
  devtool: 'cheap-module-eval-source-map',
};
