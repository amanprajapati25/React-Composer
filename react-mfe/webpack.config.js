const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "org",
    projectName: "react-mfe",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    output: {
      publicPath: "http://localhost:8081/",
    },
    plugins: [
      new ModuleFederationPlugin({
        name: "reactMfe",
        filename: "remoteEntry.js",
        exposes: {
          "./App": "./src/org-react-mfe.tsx",
        },
        shared: {
          react: { singleton: true, requiredVersion: "^17.0.0" },
          "react-dom": { singleton: true, requiredVersion: "^17.0.0" },
          "single-spa-react": { singleton: true },
        },
      }),
    ],
    devServer: {
      port: 8081,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    },
  });
};