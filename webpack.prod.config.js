const webpack = require('webpack');
const path = require('path');

const babelSettings = {
  presets: ['react', 'es2015', 'stage-0'],
};

module.exports = {
  entry: [
    './app/app.jsx',
  ],
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true,
        screw_ie8: true,
      },
      output: {
        comments: false,
        screw_ie8: true,
      },
      sourceMap: false,
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js',
  },
  resolve: {
    root: __dirname,
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
};
