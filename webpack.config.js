const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const autoprefixer = require('autoprefixer')

module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: './js/index.js',
    output: {
        filename: './js/bundle.js',
        clean: true
    },
    devtool: "source-map",
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html'
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, './src/img'),
                    to: path.resolve(__dirname, './dist/img')
                },
                {
                    from: path.resolve(__dirname, './src/svg'),
                    to: path.resolve(__dirname, './dist/svg')
                }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            plugins: [
                                autoprefixer()
                            ]
                        }
                    }
                }, 'sass-loader']
            },
            {
                test: /\.(eot|ttf|woff)$/,
                type: 'asset/resource',
                generator: {
                    filename: './fonts/[name][ext]'
                }
            }
        ]
    }
}