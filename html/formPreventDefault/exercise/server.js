const http = require('http');
const process = require('child_process');
const port = 3000;
const fs = require('fs');
const querystring = require('querystring');

function macthUrl(req) {
  const { method, url} = req;
  console.log(method)
  let result
  if (method === 'POST') {
    const urlConfig = [
      {
        path: '/frontend/focus-record',
        func: frontendFocusRecord
      },
      {
        path: '/frontend/focus',
        func: frontendFocus
      },
      {
        path: '/frontend/test-store',
        func: frontendTestStore
      },
      {
        path: '/backend',
        func: backend
      }
    ]
    result = urlConfig.find(({path}) => url.indexOf(path) !== -1)
  }
  return result || {
    path: '404',
    func: func404,
  }
}

function frontendFocus(req, res) {
  console.log('frontend start');
  const fileAddress = '/root/auto/focus-frontend.sh'
  const time1 = Date.now();
  process.execFile(fileAddress, function(error,stdout) {
    const time2 = Date.now();
    const time = time2 - time1;
    console.log(time/1000);
    console.log('frontend finish!');
    //
    process.exec('frontend finish');
  })
  const result = 'frontend end'
  return result
}

function getJsonFromData (req) {
  return new Promise((resolve, reject) => {
    let chunk = ''
    req.on('data', (data) => {
      chunk += data
    })
    req.on('end', () => {
      resolve(querystring.parse(chunk))
    })
  })
}

function frontendFocusRecord(req, res) {
  const p = getJsonFromData(req).then((data) => {
    const payload = JSON.parse(data.payload);
    const {ref} = payload
    console.log(ref)
    let fileAddress = ''
    if (ref.includes('test')) {
      fileAddress = '/root/auto/focus-record-frontend-test.sh'
    } else if (ref.includes('master')) {
      fileAddress = '/root/auto/focus-record-frontend.sh'
    }
    if (fileAddress) {
      console.log('f-record start');
      res.statusCode= 502;
      res.end(123);

      const content = fs.readFileSync(fileAddress, 'utf-8');
      console.log(content)
      const time1 = Date.now();
      process.execFile(fileAddress, function(error,stdout) {
        const time2 = Date.now();
        const time = time2 - time1;
        console.log(time/1000);
        process.exec('frontend finish');
      })
      const result = 'frontend end'
      return result
    } else {

    }
  })
  return p
}

function frontendTestStore(req, res) {
  console.log('frontendTestStore start');
  const fileAddress = '/root/auto/test-store-frontend.sh'
  const time1 = Date.now();
  process.execFile(fileAddress, function(error,stdout) {
    const time2 = Date.now();
    const time = time2 - time1;
    console.log('frontend finish!' + time / 1000);
    //
    process.exec('frontend finish');
  })
  const result = 'frontend end'
  return result
}

function backend(req, res) {
  console.log('backend start');
  console.log(Date.now());
  const fileAddress = '/root/auto/focus-backend.sh';
  const time1 = Date.now();
  process.execFile(fileAddress, function(error, stdout) {
    const time2 = Date.now();
    const time = time2 - time1;
    process.exec('backend finish');
    console.log('backend finish!'+time/1000);
  })
  const result = 'backend end'
  return result
}

function func404(req, res) {
  return '404'
}


http.createServer(function (req,res) {
  const {func} = macthUrl(req);
  const result = func(req, res);
  console.log(result)
  if (result instanceof Promise) {
    result.then((json) => {
      res.end(json);
    })
  } else {
    res.end(result);
  }

}).listen(port);
