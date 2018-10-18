'use strict';

const SassLintPlugin = require('sass-lint-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { getAbsolutePath } = require('./webpack/utils');
const entry = ['babel-polyfill', getAbsolutePath('src/index.js')];
const rules = [
  {
    enforce: "pre",
    test: /\.js$/,
    exclude: [/node_modules/, /build/],
    loader: "eslint-loader",
  },
  {
    test: /\.js$/,
    exclude: [/node_modules/, /build/],
    loader: "babel-loader",
  },
  {
    test:/\.(s*)css$/,
    use:['style-loader','css-loader', 'sass-loader']
  },
  {
    test: /\.(ttf|eot|woff|woff2|otf|svg)$/,
    loader: 'file-loader'
  },
  {
    test: /\.(png|jpeg|jpg)$/,
    loader: 'file-loader'
  }
];
const outputDir = getAbsolutePath('build');
const plugins = [
  // new SassLintPlugin({
  //
  //   failOnWarning: false,
  //   failOnError: false,
  //   testing: false
  // }),
  new HtmlWebpackPlugin({
    template: './index.html',
    title: 'Book store',
    filename: 'index.html'
  }),
];

module.exports = {
  entry,

  output: {
    filename: 'bundle.js',
    path: outputDir,
  },

  module: { rules },
  
  plugins
};
