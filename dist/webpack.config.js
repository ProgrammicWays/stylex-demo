"use strict";
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const StylexPlugin = require('@stylexjs/webpack-plugin');
const config = (env, argv) => ({
    entry: './src/index.tsx',
    mode: 'development',
    output: {
        filename: 'bundle.[fullhash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        // Ensure that the stylex plugin is used before Babel
        new StylexPlugin({
            filename: 'styles.[contenthash].css',
            // get webpack mode and set value for dev
            dev: argv.mode === 'development',
            // Use statically generated CSS files and not runtime injected CSS.
            // Even in development.
            runtimeInjection: false,
            // optional. default: 'x'
            classNamePrefix: 'x',
            // Required for CSS variable support
            unstable_moduleResolution: {
                // type: 'commonJS' | 'haste'
                // default: 'commonJS'
                type: 'commonJS',
                // The absolute path to the root directory of your project
                rootDir: __dirname
            }
        })
    ],
    resolve: {
        modules: [__dirname, 'src', 'node_modules'],
        extensions: ['*', '.js', '.jsx', '.tsx', '.ts']
    },
    module: {
        rules: [
            {
                test: /\.(js|ts)x?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                exclude: /node_modules/,
                use: ['file-loader']
            }
        ]
    }
});
module.exports = config;
