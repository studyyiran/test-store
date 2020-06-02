const path = require('path')

module.exports = {
  target: 'node',
  node: {
    __dirname: true,
  },
  context: path.resolve(__dirname, './build'),
  entry: "./srchehe/index.js",
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'server.js'
  }
}