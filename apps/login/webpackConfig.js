const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { sharedConfig, moduleFedereationRemotes } = require("../../tools/webpackConfig");
const deps = require("../../package.json").dependencies;

const APP_NAME = "app_login";
const version = "1.0.0";

module.exports = (nxConfig, context) => {

  const mergedConfig = sharedConfig(nxConfig, context);

  return {
    ...mergedConfig,
    plugins: [
      ...mergedConfig.plugins,
      new ModuleFederationPlugin({
        name: APP_NAME,
        filename: `${version}/${moduleFedereationRemotes[APP_NAME].filename}`,
        exposes: {
          "./LoginPage": "./app/LoginPage",
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
          }
        }
      })
    ],
    devServer: {
      ...mergedConfig.devServer,
      port: 4003
    }
  };
};
