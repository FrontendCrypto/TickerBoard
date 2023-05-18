const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['autoprefixer']],
              },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  //   resolve: {
  //     alias: {
  //       stimulus: '@hotwired/stimulus/dist/stimulus.umd.js',
  //     },
  //   },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css',
      // chunkFilename: '[id].css',
    }),
  ],
  
  // Optimization settings
  optimization: {
    minimize: true, // Minimize code
    minimizer: [
      new TerserPlugin({
        parallel: true, // Enable parallel processing
        extractComments: false,
        terserOptions: {
          ecma: 5, // Use ECMAScript 5
          compress: {
            comparisons: false, // Disable comparisons
            inline: 2, // Inline functions with 2 or fewer parameters
            drop_console: true, // Remove console.* statements
          },
          output: {
            comments: false, // Remove comments
            beautify: false, // Disable beautification
          },
        },
      }),
    ],
    // splitChunks: {
    //   cacheGroups: {
    //     // Split vendors into a separate chunk
    //     vendor: {
    //       test: /[\\/]node_modules[\\/]/,
    //       name: 'vendor',
    //       chunks: 'all',
    //     },
    //   },
    // },
  },

  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
  }
};