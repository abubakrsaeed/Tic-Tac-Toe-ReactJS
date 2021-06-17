var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');


module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: ExtractCssChunks.loader,
                    },
                    'css-loader',
                ],
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    }), new ExtractCssChunks({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: '[name].css',
        chunkFilename: '[id].css'
    })],
    devServer: {
        historyApiFallback: true
    },
    externals: {
        // global app config object
        config: JSON.stringify({
            apiUrl: 'http://localhost:4000'
        })
    }
}