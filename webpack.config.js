const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',
    resolve: {
      extensions: ['.ts','.js'],
    },
    entry: './src/index.ts',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    module: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: ['style-loader', 'css-loader',  "sass-loader"],
          },
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          }
        ],
      },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'todo list',
          template: path.resolve(__dirname, 'index.html'),
          filename: 'index.html' 
        }),
      ],
    devServer: {
        static: './dist',
      },
}