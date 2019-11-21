const path = require('path');
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  entry: './src/application.js',

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'application.js'
  },

  resolve: {
    symlinks: false,
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(png|jpe?g|gif|mp4)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },

  // optimization: {
  //   // minimizer: [new TerserPlugin()],
  // },

  plugins: isProduction
    ? [
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify('production')
          }
        })
      ]
    : [
      new HtmlWebpackPlugin({
        template: __dirname + '/public/index.html'
      })
    ],

  devServer: {
    port: 3001,
  }
};
