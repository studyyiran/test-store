const http = require('http')

http.createServer((req, res) => {
  let size = 0
  req.on('data', (data) => {
    console.log(data)
    size++
  })
  req.on('end', (data) => {
    res.end(String(size))
  })
}).listen('8080')