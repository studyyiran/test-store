/*
为什么这种方式就可以完成引用？
如果这样也可以，webpack和babel的价值是什么呢又？
 */

const axios = require('axios')
setInterval(get(100), 1000);

function get(bingfa) {
    return () => {
        for(let i =0 ; i < bingfa; i++) {
            axiosWrapper('http://localhost:6060').then((res) => {
                myConsole.log(res.data)
            })
        }}
}



function axiosWrapper(url) {
    const startTime = Date.now()
    const promise = axios.get(url)
    promise.then(() => {
        const endTime = Date.now()
        myConsole.log('end in ' + (endTime - startTime))
    })
    return promise
}

const myConsole = {
    log: (string) => {
        if (false) {
            console.log(string)
        }
    }
}