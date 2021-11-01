const path = require("path");

module.exports = (config) => {
  Object.assign(config.resolve.alias, {
    components: path.resolve(__dirname, "src/components"),
    stores: path.resolve(__dirname, "src/stores"),
    hooks: path.resolve(__dirname, "src/hooks"),
    routes: path.resolve(__dirname, "src/routes"),
  });

  return config;
};
