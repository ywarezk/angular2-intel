/**
 * Configuration for webpack
 */

var path = require('path');
module.exports = {
    entry: './src/app.module.ts',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        loaders: [
            {test: /\.ts$/, loader: 'ts-loader'}
        ]
    }
}
