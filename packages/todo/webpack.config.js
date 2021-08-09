const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { config, moduleFedereationRemotes } = require("../../webpack/webpack.config");
const deps = require("./package.json").dependencies;
const version = require("./package.json").version;

const APP_NAME = "app_todo";

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
      exposes: {
        "./TodoPage": "./src/TodoPage",
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
        "@material-ui/core": {
          singleton: true,
          requiredVersion: deps["@material-ui/core"],
        },
        "@material-ui/styles": {
          singleton: true,
          requiredVersion: deps["@material-ui/styles"]
        }
      }
    })
  ],
};
