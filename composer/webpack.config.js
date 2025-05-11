const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "org",
    projectName: "root-config",
    webpackConfigEnv,
    argv,
    disableHtmlGeneration: true,
  });

  return merge(defaultConfig, {
    plugins: [
      new ModuleFederationPlugin({
        name: "root", // global variable
        filename: "remoteEntry.js", // file name
        remotes: {
          "@org/react-mfe": "reactMfe@http://localhost:8081/remoteEntry.js",
          "@org/vue-mfe": "vueMfe@http://localhost:8082/remoteEntry.js",
        },
        shared: { // shared dependencies
          react: { singleton: true, requiredVersion: "^17.0.0" },
          "react-dom": { singleton: true, requiredVersion: "^17.0.0" },
          "single-spa-react": { singleton: true },
        },
      }),
      new HtmlWebpackPlugin({
        template: "./src/index.ejs",
        templateParameters: {
          isLocal: webpackConfigEnv && webpackConfigEnv.isLocal,
          orgName: "org",
        },
      }),
    ],
    devServer: {
      port: 9000,
      historyApiFallback: true,
    },
  });
};