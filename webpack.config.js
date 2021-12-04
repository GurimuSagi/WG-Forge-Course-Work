const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
<<<<<<< HEAD
    entry: path.resolve(__dirname, './src/js/main.js'),
=======
    entry: path.resolve(__dirname, './src/index.js'),
>>>>>>> 6408b8c9950e394600e52082bab166a0bda6e9e4
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        assetModuleFilename: 'src/assets/images/[name].[ext]',
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'src'),
        },
        compress: true,
<<<<<<< HEAD
        port: 8080,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
        },
    },
    experiments: {
        topLevelAwait: true,
=======
        port: 9000,
>>>>>>> 6408b8c9950e394600e52082bab166a0bda6e9e4
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/template.html'),
            filename: 'index.html',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff)$/,
                type: 'asset/resource',
            },
        ],
    },
};
