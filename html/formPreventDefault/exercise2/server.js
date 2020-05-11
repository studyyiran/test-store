const http = require('http')

const target = http.createServer((req, res) => {
  const {url, method} = req
  const startTime = Date.now()
  function getTime() {
    return Number(Date.now()) - Number(startTime)
  }
  res.statusCode = 500
  // res.setHeader('Content-Type', 'text/html')
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  // 这块似乎要设置成这样 他才正常，原因不明（得去看书）
  // res.setHeader('Content-Type', 'application/json; charset=utf-8')
  // 报错还是有问题
  req.on('error', () => {
    console.log('get it')
    res.end('error')
  })
  res.on('error', () => {
    console.log('get it')
    res.end('error')
  })
  if (method === 'GET') {
    //  解析获得参数
    const time = getTime()
    console.log(time)
    // 这块也原因不明（还是得去看书）
    res.write(String(decodeURIComponent(url)));
    // res.write(time);
    res.write(String(time));
    res.end()
  } else {
    let content
    // 从xx中解析获得参数
    req.on('data', (data) => {
      console.log(data)
      content = decodeURIComponent(data)
    })
    req.on('end', (data) => {
      console.log('post finish')
      console.log(data)
      res.write(content);
      res.end()
    })
  }
}).listen('8080', () => {
  console.log('is listening')
})