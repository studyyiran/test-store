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

 if(req.url.indexOf('get') === -1){
  let p1 = new Promise((resolve, reject) => {
    req.on('data',function(data){
      const afterdata = decodeURIComponent(data)
      console.log("服务器接收到的数据：　"+ afterdata);
      resolve(afterdata)
     });
  })
  

  req.on("end",function(){

   console.log('客户端请求数据全部接收完毕');

  });
  p1.then((value) => {
    res.write(value)
    res.end();
  })
  } else {
    res.write('get')
    res.end();
  }
  
  

}).listen(4001,"localhost",function(){

 console.log("listened");

});