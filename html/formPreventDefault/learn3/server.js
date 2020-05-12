const http = require('http')

const server = http.createServer((req, res) => {
    const {url} = req
    console.log(url)
    var content = ""
    req.setEncoding("utf-8")
    req.on('data',(data) => {
        console.log(data)
        content += data
    })
    req.on('end', () => {
        console.log(content)
        // const a = querystring.parse(content)
        // console.log(a)
        res.statusCode = 400
        res.write('hehe123')
        res.end
    })
})

server.listen(8080)