const http = require('http')
http.createServer((req, res) => {
  const {method, url, body} = req
  console.log(method)
  console.log(url)
  console.log(body)
  req.on('data', (data) => {
    console.log('post data is')
    console.log(decodeURIComponent(data))
  })
  res.end('get it')
}).listen('4001', () => {
  console.log('is listening')
})