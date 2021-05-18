const { withExpo } = require('@expo/next-adapter')
const withPlugins = require("next-compose-plugins");

const withTM = require("next-transpile-modules")([
  "@expo/next-adapter",
]);

module.exports = withPlugins([withTM, [withExpo, { projectRoot: __dirname }]], {
  future: { webpack5: false },
});
