const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }, {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            }, {
                test: /\.css$/,
                use: [
                    "style-loader", {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1
                        }
                    },
                    "postcss-loader",
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {template: './public/index.html', filename: './index.html'}
        ),
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist"),
            watch: true
        },
        open: true,
        compress: true,
        port: 3005
    }
};
