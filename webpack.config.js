var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://8080',
    'webpack/hot/only-dev-server',
    './app/App.js'
  ],
  output: {
    path: 'public',
    publicPath: 'http://localhost:8080/public/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js?$/, loaders: ['react-hot', 'babel'], include: path.join(__dirname, 'public'), exclude: /node_modules/ },
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.scss$/, loader: "style-loader!css-loader!sass-loader?sourceMap" }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};

