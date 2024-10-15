const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

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
                // {
                //     from: path.resolve(__dirname, './src/fonts'),
                //     to: path.resolve(__dirname, './dist/fonts')
                // },
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
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            // {
            //     test: /\.(eot|ttf|woff)$/,
            //     type: 'asset/resource'
            // }
            // {
            //     test: /\.(eot|ttf|woff)$/,
            //     use: ['file-loader'],
            //     options: {
            //         outputPath: 'fonts'
            //     }
            // },
        ]
    }
}