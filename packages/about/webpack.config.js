const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { config, moduleFedereationRemotes, buildRemoteUrl } = require("../../webpack/webpack.config");
const deps = require("./package.json").dependencies;
const version = require("./package.json").version;

const APP_NAME = "app_about";

module.exports = {
  ...config,
  entry: {
    index: "./public/index.jsx",
  },
  plugins: [
    ...config.plugins,  
    new ModuleFederationPlugin({
      name: APP_NAME,
      filename: `${version}/${moduleFedereationRemotes[APP_NAME].filename}`,
      remotes: {
        app_todo: buildRemoteUrl('app_todo')
      },      
      exposes: {
        "./AboutPage": "./src/AboutPage",
      }, 
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
        "react-router-dom": {
          singleton: true,
          requiredVersion: deps["react-router-dom"],
        }
      }
    })
  ],
};
