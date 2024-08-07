import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import { ProvidePlugin, DefinePlugin } from 'webpack';

export default {
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
    path: resolve(__dirname, 'dist'),
    publicPath: '/'
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
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
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
    new ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new DefinePlugin({
      'typeof window.ethereum': JSON.stringify('object')
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};