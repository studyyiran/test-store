const http = require('http')

const target = http.createServer((req, res) => {
  const {url, method} = req
  const startTime = Date.now()
  function getTime() {
    return Date.now() - startTime
  }
  if (method === 'GET') {
    //  解析获得参数
    res.write(getTime());
    res.write(url);
    res.end()
  } else {
    // 从xx中解析获得参数
    req.on('data', (data) => {
      console.log(data)
    })
    req.on('end', () => {
      console.log('post finish')
      res.write(getTime());
      res.end()
    })
  }
}).listen('8080', () => {
  console.log('is listening')
})