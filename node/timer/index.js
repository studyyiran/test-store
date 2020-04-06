const http = require('http');
let count = 0
http.createServer((req, res) => {
    console.log('start with' + count)
    count = count + 1
    const timerPromise = promise((resolve) => {
        setTimeout(() => {
            resolve('end with' + count)
        }, 0)
    })
    timerPromise.then((mes) => {
        console.log(mes)
        res.end('now is' + count)
    })
}).listen('6060')


function promise(func) {
    return new Promise((resolve, reject) => {
        func(resolve, reject)
    })
}