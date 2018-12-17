const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  mode: "production",

  resolve: {
    extensions: [".mjs", ".web.js", ".js", ".json", ".web.jsx", ".jsx"]
  },

  entry: {
    index: "./src/index.js"
  },

  output: {
    filename: "[name].[hash].js",
    chunkFilename: "[name].[hash].chunk.js",
    path: path.resolve(__dirname, "dist"),
  },

  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader?presets[]=env&presets[]=react&presets[]=stage-2"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: false,
    },
    // Keep the runtime chunk seperated to enable long term caching
    // https://twitter.com/wSokra/status/969679223278505985
    runtimeChunk: true,
  },
  externals: {
    react: {
      root:"React",
      amd:'react',
      commonjs:"react",
      commonjs2:"react",
    }
  },
  plugins: [new CleanWebpackPlugin(["dist"])]
};