const webpack = require('webpack');
const path = require('path');
const envFile = require('node-env-file');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

try {
  envFile(path.join(__dirname, `config/${process.env.NODE_ENV}.env`));
} catch (e) {
  //
}

const babelSettings = {
  presets: ['react', 'es2015', 'stage-0'],
};

module.exports = {
  entry: [
    './app/app.jsx',
  ],
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        API_KEY: JSON.stringify(process.env.API_KEY),
        AUTH_DOMAIN: JSON.stringify(process.env.AUTH_DOMAIN),
        DATABASE_URL: JSON.stringify(process.env.DATABASE_URL),
        STORAGE_BUCKET: JSON.stringify(process.env.STORAGE_BUCKET),
      },
    }),
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js',
  },
  resolve: {
    root: __dirname,
    modulesDirectories: [
      'node_modules',
      './app/api',
      './app/components',
    ],
    alias: {
      app: 'app',
      actions: 'app/actions/actions.jsx',
      applicationStyles: 'app/styles/app.sass',
      configureStore: 'app/store/configureStore.jsx',
      reducers: 'app/reducers/reducers.jsx',
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
