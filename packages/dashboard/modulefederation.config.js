const { moduleFedereationRemotes, buildRemoteUrl } = require("../../webpack/modulefederation.config");
const deps = require("./package.json").dependencies;
const version = require("./package.json").version;

const APP_NAME = "app_dashboard";

module.exports = {
  name: APP_NAME,
  filename: `${version}/${moduleFedereationRemotes[APP_NAME].filename}`,
  remotes: {
    app_todo: buildRemoteUrl('app_todo'),
    app_about: buildRemoteUrl('app_about')
  },
  exposes: {
    "./DashboardPage": "./src/DashboardPage",
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
  },
};
