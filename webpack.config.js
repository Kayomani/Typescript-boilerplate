var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var webpack = require("webpack");
var ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
var WebpackCleanupPlugin = require("webpack-cleanup-plugin");

var basePath = __dirname;

module.exports = {
  context: path.join(basePath),
  resolve: {
    extensions: [".js", ".ts", ".tsx"]
  },
  entry: "./src/index.tsx",
  output: {
    path: path.join(basePath, "dist"),
    filename: "[name].js"
  },
  optimization: {
    splitChunks: {
      name: true,
      cacheGroups: {
        commons: {
          chunks: "initial",
          minChunks: 2
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: "all",
          priority: -10
        }
      }
    },
    runtimeChunk: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        enforce: "pre",
        loader: "tslint-loader",
        options: {
          /* Loader options go here */
        }
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          cacheDirectory: "build/.babelcache"
        }
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=application/octet-stream"
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader"
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader?limit=10000&mimetype=image/svg+xml"
      }
    ]
  },
  devServer: {
    port: 5000
  },
  plugins: [
    new WebpackCleanupPlugin(),
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./build/index.html",
      hash: true
    })
  ]
};
