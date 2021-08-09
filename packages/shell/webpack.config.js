const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { config, moduleFedereationRemotes, buildRemoteUrl } = require("../../webpack/webpack.config");
const deps = require("./package.json").dependencies;
const version = require("./package.json").version;

const APP_NAME = "app_shell";

module.exports = {
  ...config,
  entry: "./src/index.jsx",
  plugins: [
    ...config.plugins,  
    new ModuleFederationPlugin({
      name: APP_NAME,
      filename: `${version}/${moduleFedereationRemotes[APP_NAME].filename}`,
      remotes: {
        app_dashboard: buildRemoteUrl('app_dashboard'),
        app_login: buildRemoteUrl('app_login')
        // app_dashboard: "app_dashboard@../dashboard/dashboardRemoteEntry.js",
        //app_login: "app_login@../login/loginRemoteEntry.js"
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
