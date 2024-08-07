const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    main: './src/index.js',
    vendor: [
      'bootstrap',
      'bootstrap/dist/css/bootstrap.min.css',
      'bootstrap-icons/font/bootstrap-icons.css',
      'jquery',
      'slick-carousel',
      'slick-carousel/slick/slick.css',
      'slick-carousel/slick/slick-theme.css',
      'web3'
    ]
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new CopyPlugin({
      patterns: [
        { from: "assets", to: "assets" },
      ],
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new webpack.DefinePlugin({
      'typeof window.ethereum': JSON.stringify('object')
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};