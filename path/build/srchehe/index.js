const path = require('path')
const http = require('http')
// 表示的是，当前文件，所在的文件夹的路径
console.log("__dirname is" + __dirname)
log(path.resolve(__dirname))
log(path.resolve(__dirname, 'a.js'))
log(path.resolve(__dirname, './a.js'))
log(path.resolve(__dirname, '/a.js'))


function log(string) {
  console.log(string)
}

http.createServer(() => {

}).listen(8081)