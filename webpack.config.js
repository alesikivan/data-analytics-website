const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const path = require('path')

module.exports = {
  entry: './src/index.tsx',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|jp2|webp)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          url: true,
          esModule: false
        },
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.scss'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: '[name].[ext]'
  },
  performance: {
    hints: false,
    maxAssetSize: 512000,
    maxEntrypointSize: 512000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
      favicon: path.resolve(__dirname, 'public', 'favicon.png')
    }),
    new Dotenv(),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public/assets', to: 'assets' }
      ],
    }),
    new FaviconsWebpackPlugin({
      logo: path.resolve(__dirname, 'public', 'favicon.png'),
      outputPath: 'assets/icons'
    })
  ],
  devServer: {
    historyApiFallback: true,
    port: 3000,
    compress: true,
    hot: true,
    static: {
      directory: path.join(__dirname, 'dist'),
    }
  },
}