const path = require('path');

module.exports = {
    target: 'node',
    entry: './src/index.js',
    node: {
        __dirname: false,
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'server.js'
    }
}