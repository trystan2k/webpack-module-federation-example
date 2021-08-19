const webpack = require("webpack");

const moduleFedereationRemotes = {
  app_about: {
    host: 'http://localhost',
    port: '4004',
    version: '1.0.0',
    filename: 'remoteEntry.js'
  },
  app_todo: {
    host: 'http://localhost',
    port: '4002',
    version: '1.0.0',
    filename: 'remoteEntry.js'
  },
  app_dashboard: {
    host: 'http://localhost',
    port: '4001',
    version: '1.0.0',
    filename: 'remoteEntry.js'
  },
  app_login: {
    host: 'http://localhost',
    port: '4003',
    version: '1.0.0',
    filename: 'remoteEntry.js'
  },
  app_shell: {
    host: 'http://localhost',
    port: '4000',
    version: '1.0.0',
    filename: 'remoteEntry.js'
  }
}

module.exports.moduleFedereationRemotes = moduleFedereationRemotes

module.exports.buildRemoteUrl = (app_name) => {
  return `${app_name}@${moduleFedereationRemotes[app_name].host}:${moduleFedereationRemotes[app_name].port}/${moduleFedereationRemotes[app_name].version}/${moduleFedereationRemotes[app_name].filename}`
}

module.exports.sharedConfig = (nxConfig, context) => {
  return {
    ...nxConfig,
    output: {
      ...nxConfig.output,
      filename: "[name].[fullhash].js",
      publicPath: "auto",
      chunkFilename: "[name].[contenthash].js",
    },
    module: {
      ...nxConfig.module,
      rules: [
        {
          test: /\.(jpg|png|gif|jpeg)$/,
          loader: "url-loader",
        },
        ...nxConfig.module.rules,
      ]
    },
    optimization: {
      ...nxConfig.optimization,
      runtimeChunk: false
    },
    devServer: {
      ...nxConfig.devServer
    }
  }
};
