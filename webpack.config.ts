var path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const globImporter = require('node-sass-glob-importer')

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, './src/index.tsx'),
    output: {
        path: path.resolve('build'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
            typedefs: path.resolve(__dirname, 'src/typedefs'),
            hooks: path.resolve(__dirname, 'src/hooks'),
            constants: path.resolve(__dirname, 'src/constants'),
        },
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './build',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: ['ts-loader'],
            },
            {
                test: /\.js$/,
                use: ['source-map-loader'],
                enforce: 'pre',
            },
            {
                test: /\.s?(css|ass)$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: {
                                importer: globImporter(),
                            },
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Test BHUT',
            template: path.resolve(__dirname, 'public/index.html'),
            filename: path.resolve(__dirname, 'build/index.html'),
        }),
    ],
}
