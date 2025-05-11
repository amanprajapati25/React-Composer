const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-vue");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "org",
    projectName: "vue-mfe",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    output: {
      publicPath: "http://localhost:8082/",
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "vueMfe",
        filename: "remoteEntry.js",
        exposes: {
          "./App": "./src/main.js",
        },
        shared: {
          vue: { singleton: true },
          "single-spa-vue": { singleton: true },
        },
      }),
    ],
    devServer: {
      port: 8082,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    },
  });
};