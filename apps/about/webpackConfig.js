const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { sharedConfig, moduleFedereationRemotes, buildRemoteUrl } = require("../../tools/webpackConfig");
const deps = require("../../package.json").dependencies;

const APP_NAME = "app_about";
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
        remotes: {
          app_todo: buildRemoteUrl('app_todo')
        },
        exposes: {
          "./AboutPage": "./app/AboutPage",
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
      port: 4004
    }
  };
};
