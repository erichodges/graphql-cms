import * as path from 'path';
import * as webpack from 'webpack';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';

const config: webpack.Configuration = {
  
  entry: './src/index.tsx',
  
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'graphql-cms.bundle.js'
  },
  
  module: {
    rules: [

      // TypeScript
      { test: /\.tsx?$/, use: [ 'ts-loader' ] },

      // SCSS
      { test: /\.scss$/, use: [ 'style-loader', 'css-loader', 'sass-loader' ] },

      // CSS
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] }

    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: __dirname + '/public/index.html'
    })
  ],

  devServer: {
    contentBase: '/public',
    hot: true
  }

};

export default config;