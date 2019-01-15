var path = require('path');
const webpack = require("webpack");

module.exports = function(env, argv) {
  return {
    mode: "development",
    entry: "./src/index.tsx",
    externals: {
      React: "React",
      ReactDOM: "ReactDOM",
    },
    devtool: "eval",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "fredonia.js",
      library: ["Fredonia"],
      libraryTarget: "umd"
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          enforce: "pre",
          loader: "tslint-loader",
          options: {
            configFile: "tslint.json",
            failOnHint: false
          }
        },
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /(node_modules)/,
          options: {
            configFile: "tsconfig.json"
          }
        },
        {
          test: /\.(le|sa|sc|c)ss$/,
          exclude: [path.resolve(__dirname, "node_modules")],
          use: ["style-loader", "css-loader", "less-loader"]
        }, {
          test: /\.html$/,
          use: "html-loader",
        }, {
          test: /\.(png|jpg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: "file-loader"
        }, {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [{
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }]
        }
      ]
    },
    resolve: {
      extensions: [
        ".tsx",
        ".ts",
        ".js",
        ".less",
        ".css"
      ]
    },
    plugins: [],
    devServer: {
      clientLogLevel: "warning",
      compress: false,
      contentBase: path.join(__dirname, "src")
    }
  };
};
