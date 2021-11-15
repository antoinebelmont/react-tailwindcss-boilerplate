const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devtool: "source-map",
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.svg$/,
                exclude: /node_modules/,
                use: {
                    loader: 'svg-react-loader',
                }
            },
            {
                test: /\.js$/,
                loader: "source-map-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            }, {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }, {
                test: /\.html$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            }, {
                test: /\.css$/,
                exclude: /node_modules/,
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
