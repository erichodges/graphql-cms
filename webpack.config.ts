import * as path from 'path';
import * as webpack from 'webpack';

const config: webpack.Configuration = {
  
  entry: './src/index.tsx',
  
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'graphql-cms.bundle.js'
  },
  
  module: {
    rules: [

      // TypeScript
      { test: /\.tsx?$/, use: [ 'ts-loader' ] },

      // CSS
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] }

    ]
  },

  plugins: [],

};

export default config;