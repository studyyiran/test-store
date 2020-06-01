const path = require('path');

module.exports = {
    entry: './src/browser.js',
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js'
    }
}