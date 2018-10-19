const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',

  resolve: {
    extensions: ['.mjs', '.web.js', '.js', '.json', '.web.jsx', '.jsx'],
  },

  entry: {
    index: './src/index.js'
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, "dist"),
    libraryTarget: 'commonjs2'
  },

  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=env&presets[]=react&presets[]=stage-2'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin(['dist'])
  ]
}