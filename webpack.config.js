import { resolve as _resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ImageminWebpackPlugin from 'imagemin-webpack-plugin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import CopyPlugin from 'copy-webpack-plugin';
import webpack from 'webpack';

const { ProvidePlugin, DefinePlugin } = webpack;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const entry = {
  main: './src/index.js',
};
export const output = {
  filename: '[name].bundle.js',
  path: _resolve(__dirname, 'dist'),
  publicPath: '/Dream-A-DApp-Web/',
  clean: true,
};
export const module = {
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
};
export const plugins = [
  new HtmlWebpackPlugin({
    template: './index.html',
    inject: true
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
    'typeof window.ethereum': JSON.stringify('object'),
    'process.env.NODE_ENV': JSON.stringify('production')
  }),
  new ImageminWebpackPlugin.default({
    plugins: [
      imageminMozjpeg({
        quality: 75,
        progressive: true,
      }),
    ],
  }),
];
export const optimization = {
  splitChunks: {
    chunks: 'all',
  },
};

export default {
  entry,
  output,
  module,
  plugins,
  optimization
};