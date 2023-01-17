const { ModuleFederationPlugin } = require('webpack').container;

const webpackConfigPath = 'react-scripts/config/webpack.config';
const webpackConfig = require(webpackConfigPath);

const override = config => {
  config.plugins.push(new ModuleFederationPlugin(require('../../modulefederation.config.js')));

  config.output.publicPath = 'auto';

  config.module.rules[1].oneOf.find(
    ({ test: t }) =>
      t != null &&
      !Array.isArray(t) &&
      t.toString().includes('ts')
  ).include = undefined

  return config;
};

require.cache[require.resolve(webpackConfigPath)].exports = env => override(webpackConfig(env));

module.exports = require(webpackConfigPath);
