const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    plugins: [
        HtmlWebpackPlugin({
            template: 'index.html',
        }),
    ]
}