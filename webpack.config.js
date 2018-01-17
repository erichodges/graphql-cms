"use strict";
exports.__esModule = true;
var path = require("path");
var config = {
    entry: './src/index.tsx',
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'foo.bundle.js'
    },
    module: {
        rules: [
            // TypeScript
            { test: /\.tsx?$/, use: ['ts-loader'] },
            // CSS
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }
        ]
    },
    plugins: []
};
exports["default"] = config;
