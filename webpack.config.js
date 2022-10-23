const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  entry: './src/main.js',
  output: {
    // filename: 'main.bundle.js',
    path: resolve(__dirname, 'build'),
    filename: 'main.[contenthash].js'
  },
  plugins: [
    new BundleAnalyzerPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'index.html'),
    }),
  ],
  module: {
    rules: [
      // {
      //   test: /\.html$/,
      //   use: [
      //     {
      //       loader: "html-loader",
      //     },
      //   ],
      // },
      {
        test: /\\.css$/, 
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader','sass-loader'],
      },
      // {
      //   test: /\\.(png|jpe?g|gif|mp3)$/i,
      //   use: 'file-loader',
      //   options: {
      //     name: '[path][name].[ext]',
      //   },
      // }
    ]
  },
  devServer: {
    port: 3000
  }
};