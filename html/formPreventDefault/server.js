// const express = require('express')
// const app = new express();

// app.listen('4001', () => {
//   console.log('finish')
// })

// app.get('/get', (req, res) => {
//   console.log(req)
//   res.send('you send get')
// })

// app.post('/post', (req, res) => {
//   console.log(req)
//   res.send('you send post')
// })


var http = require('http');

var server = http.createServer(function(req,res){
  // 1 先看看req有什么
  const {method, url, headers, body} = req
  console.log('start')
  // console.log(method)
  // console.log(url)
  // console.log(headers['user-agent'])

  res.on('error', (err) => {
    console.error(err);
  });

  req.on('error', (err) => {
    // This prints the error message and stack trace to `stderr`.
    console.error(err.stack);
  });

 if(url.indexOf('get') === -1){
  let p1 = new Promise((resolve, reject) => {
    // req.on('data',function(data){
    //   const afterdata = decodeURIComponent(data)
    //   console.log("服务器接收到的数据：　"+ afterdata);
    //   resolve(afterdata)
    //  });
  })
  let body = [];
  req.on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    // at this point, `body` has the entire request body stored in it as a string
    console.log('客户端请求数据全部接收完毕' + decodeURIComponent(body));
    res.write(body)
    res.end();
  });


  p1.then((value) => {
    console.log('ready to return')
    // res.write(value+'中国' + 'finish')
    // res.setHeader('Content-Type', 'application/json');
    res.write(value)
    res.end();
  })
  } else {
    res.statusCode = 404
    res.writeHead(200, {
      // 'Content-Type': 'application/json',
      'Content-Type': 'text/html',
      // 'Content-Type': 'text/plain',
      'X-Powered-By': 'bacon'
    });
    const responseBody = { headers, method, url, body };
    res.write(`<html>`)
    res.write(`<p>headers:${JSON.stringify(headers)}</p>`)
    res.write(`<p>method:${method}</p>`)
    res.write(`<p>url:${url}</p>`)
    res.write(`<p>body:${body}</p>`)
    res.write(`</html>`)
    res.end();
  }

  

}).listen(4001,"localhost",function(){

 console.log("listened");

});