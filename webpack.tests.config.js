const path = require("path");

const ArcGISPlugin = require("@arcgis/webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    init: "./src/index.tsx",
    tests: "./tests/main.ts"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./~tmp")
  },

  resolve: {
    modules: [
      path.resolve(__dirname, "./src"),
      path.resolve(__dirname, "./tests"),
      "node_modules/"
    ],
    extensions: [".ts", ".tsx", ".js", ".css", ".scss"]
  },

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "ts-loader",
          options: {
            transpileOnly: true
          }
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
              options: { minimize: false }
            }
          ],
          exclude: /node_modules/
        },
        {
          test: /\.(jpe?g|png|gif|svg|webp)$/,
          loader: "url-loader",
          options: {
            // Inline files smaller than 10 kB (10240 bytes)
            limit: 10 * 1024
          }
        },
        {
          test: /\.(wsv|ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "build/[name].[ext]"
              }
            }
          ]
        },
        {
          test: /\.css$|\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            {
              loader: "resolve-url-loader",
              options: { includeRoot: true }
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true,
                includePaths: [
                  path.resolve("./node_modules")
                ]
              }
            }
          ]
        }
      ]
    },

  plugins: [
    new CleanWebpackPlugin(["~tmp"]),
    new ArcGISPlugin({
      useDefaultAssetLoaders: false
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[chunkhash].css",
      chunkFilename: "[id].css"
    })
  ],

  node: {
    process: false,
    global: false,
    fs: "empty"
  }
};
