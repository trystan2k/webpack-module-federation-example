require("dotenv").config({ silent: true });
const webpack = require("webpack");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const moduleFedereationRemotes = {
  app_about: {
    host: 'http://localhost',
    port: '3004',
    version: '1.0.0',
    filename: 'remoteEntry.js'
  },
  app_todo: {
    host: 'http://localhost',
    port: '3002',
    version: '1.0.0',
    filename: 'remoteEntry.js'
  },
  app_dashboard: {
    host: 'http://localhost',
    port: '3001',
    version: '1.0.0',
    filename: 'remoteEntry.js'
  },
  app_login: {
    host: 'http://localhost',
    port: '3003',
    version: '1.0.0',
    filename: 'remoteEntry.js'
  },
  app_shell: {
    host: 'http://localhost',
    port: '3000',
    version: '1.0.0',
    filename: 'remoteEntry.js'
  }
}

module.exports.moduleFedereationRemotes = moduleFedereationRemotes

module.exports.buildRemoteUrl = (app_name) => {
  return `${app_name}@${moduleFedereationRemotes[app_name].host}:${moduleFedereationRemotes[app_name].port}/${moduleFedereationRemotes[app_name].version}/${moduleFedereationRemotes[app_name].filename}`
}

module.exports.config = {
  entry: path.resolve("src/index.tsx"),
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
  devtool: process.env.NODE_ENV === "production" ? "source-map" : "inline-source-map",
  output: {
    path: path.resolve("build"),
    filename: "[name].[fullhash].js",
    publicPath: "auto",
    chunkFilename: "[name].[contenthash].js",
  },  
  devServer: {
    historyApiFallback: true,
  },  
  resolve: {
    extensions: [".js", ".mjs", ".jsx", ".css", ".jpg", "png", "jpeg"],
    alias: {
      events: "events",
    },
  },  
  plugins: [
    new webpack.EnvironmentPlugin(["NODE_ENV"]),
    new HtmlWebpackPlugin({
      template: path.resolve("public/index.html"),
    }),    
  ],
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif|jpeg)$/,
        loader: "url-loader",
      },         
      {
        test: /\.m?js$/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
    ],
  }
};
