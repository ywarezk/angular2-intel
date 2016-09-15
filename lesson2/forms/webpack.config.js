/**
 * configuration for webpack
 */

var path = require('path');
module.exports = {
    entry: './src/app.module.ts',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'assets'
    },
    module: {
        loaders: [
            {test: /\.ts$/, loader: 'ts-loader'},
            {test: /\.html$/, loader: 'raw-loader'},
            {test: /\.css$/, loader: 'raw-loader'}
        ]
    }
}
