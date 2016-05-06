var path = require('path')
var webpack = require('webpack')
var autoprefixer = require('autoprefixer')

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src')
      },
      { test: /\.css$/,
        loader: 'style-loader!style-loader!css-loader!postcss-loader'
      },
      { test: /\.png$/,
        loader: 'url-loader?limit=100000'
      },
      { test: /\.jpg$/,
        loader: 'file-loader'
      }
    ]
  },
  postcss: function () {
    return [autoprefixer]
  }
}
