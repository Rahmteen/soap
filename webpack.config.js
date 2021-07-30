// webpack looks for this filename by default in out "./*" directory.

// declare global plugins/depedencies
let path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin");
const dotenv = require('dotenv')
const webpack = require('webpack')


// exporting this module for the global rules of webpack
module.exports = {
  // set entry
  entry: "./src/index.js",
  // set output
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  module: {
    // resolve our different file types
    rules: [
      {
        test: /\.ttf$/,
        use: [
          {
            loader: 'ttf-loader',
            options: {
              name: './font/[hash].[ext]',
            },
          },
        ]
      },
      {
        // checks the extension
        test: /.(js|jsx)$/,
        // ignores these folders/directories
        exclude: /node_modules/,
        // if test passes, webpack uses the loaders specified
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: "file-loader",
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ],
  },
  // set mode
  mode: "development",
  // setup dev server
  devServer: {
    host: "localhost",
    port: "8080",
    historyApiFallback: true,
    inline: true,
    proxy: { "/api": { target: "http://localhost:3000", secure: false } },
  },
  // set plugins
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      // favicon: '/assets/images/postmark-logo.png'
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.config().parsed) // it will automatically pick up key values from .env file
      })
  ],
  // resolve extensions for imports into future components
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
        '@': path.resolve(__dirname, 'src/'),
    }
  },
};





