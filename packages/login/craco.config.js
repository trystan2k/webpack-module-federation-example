const path = require("path");
const cracoModuleFederation = require("craco-module-federation");
const absolutePath = path.join(__dirname, "../shared-library");
const { getLoaders, loaderByName } = require("@craco/craco");

module.exports = {
  webpack: {
    alias: {},
    configure: (webpackConfig, { env, paths }) => {
      const { hasFoundAny, matches } = getLoaders(
        webpackConfig,
        loaderByName("babel-loader")
      );
      if (hasFoundAny) {
        matches.forEach((match) => {
          const include = Array.isArray(match.loader.include)
            ? match.loader.include
            : [match.loader.include];
          match.loader.include = include.concat[absolutePath];
        });
      }
      return webpackConfig;
    },
  },
  plugins: [
    {
      plugin: cracoModuleFederation,
    },
  ],
};
