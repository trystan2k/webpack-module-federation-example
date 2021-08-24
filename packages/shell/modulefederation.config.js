const { moduleFedereationRemotes, buildRemoteUrl } = require("../../webpack/modulefederation.config");
const deps = require("./package.json").dependencies;
const version = require("./package.json").version;

const APP_NAME = "app_shell";

module.exports = {
  name: APP_NAME,
  filename: `${version}/${moduleFedereationRemotes[APP_NAME].filename}`,
  remotes: {
    app_dashboard: buildRemoteUrl('app_dashboard'),
    app_login: buildRemoteUrl('app_login')
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
