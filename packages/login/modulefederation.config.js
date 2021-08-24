const { moduleFedereationRemotes } = require("../../webpack/modulefederation.config");
const deps = require("./package.json").dependencies;
const version = require("./package.json").version;

const APP_NAME = "app_login";

module.exports = {
  name: APP_NAME,
  filename: `${version}/${moduleFedereationRemotes[APP_NAME].filename}`,
  exposes: {
    "./LoginMFE": "./src/App",
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
