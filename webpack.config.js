const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.ts',

  target: 'web',

  mode: 'development',

  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ],
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
      hash: true,
    }),
  ],

  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    liveReload: true,
    open: true,
    port: 3000,
    watchContentBase: true,
    hot: true,
  }
};
