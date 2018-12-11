const createConfig = require('../webpack.config');

// Export a function. Accept the base config as the only param.
module.exports = (storybookBaseConfig, configType) => {
  // configType has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.
  const projectConfig = createConfig(null, {
    mode: configType === 'PRODUCTION' ? 'production' : 'development',
  });
  storybookBaseConfig.module.rules = [].concat(
    projectConfig.module.rules,
    storybookBaseConfig.module.rules
  );
  storybookBaseConfig.resolve.extensions = [].concat(
    projectConfig.resolve.extensions,
    storybookBaseConfig.resolve.extensions
  );

  // Return the altered config
  return storybookBaseConfig;
};
