var path = require('path')
var webpack = require('webpack')
var autoprefixer = require('autoprefixer')

module.exports = {
  devtool: 'inline-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/client/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        include: __dirname,
        query: {
          presets: [ 'react-hmre' ]
        }
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
  resolve: {
    modulesDirectories: ['src', 'node_modules']
  },
  postcss: function () {
    return [autoprefixer]
  }
}
