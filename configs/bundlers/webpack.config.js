const Dotenv = require('dotenv-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
// const ExtractTextPlugin = require("extract-text-webpack-plugin")
const path = require('path')

module.exports = {
  entry: './dist/index.js',
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    // new Dotenv({
    //   path: `./.env.${env === "production" ? "prd" : "dev"}`,
    // })
    //, new HtmlWebpackPlugin({
    //         hash: true,
    //         filename: './dist/index.html'
    // })
    , new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: './',
              hmr: process.env.NODE_ENV === 'development',
            }
          },
          {
            loader: 'css-loader',
            options: { sourceMap: true, importLoaders: 1 }
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true }
          },
            // { loader: "postcss-loader",
            //   options: {
            //     autoprefixer: {
            //         browsers: ["last 2 versions"]
            //     },
            //     plugins: () => [
            //         autoprefixer
            //     ]
            //   }
            // }
          ],
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
                presets: ['@babel/preset-env',
                  {
                    'plugins': ['@babel/plugin-proposal-class-properties']
                  }
                ]
        }
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          'file-loader?name=[name].[ext]&outputPath=images/&publicPath=/dist/images',
          'image-webpack-loader'
        ]
      },
      {
        test:/\.(woff2?|svg)$/,
        loader: 'url-loader?limit=10000&name=fonts/[name].[ext]'
      },
      {
        test: /\.(ttf|eot)$/,
        loader: 'file-loader?name=fonts/[name].[ext]'
      }
    ]
  }
};
