const express = require('express');
const path = require('path');
const fs = require('fs')
const app = express();
// app.use('/static', express.static(path.resolve(__dirname, './build')))
console.log(__dirname)
app.use('/static', express.static(__dirname));
// app.use('/static', express.static('build'));
app.get('/static/*', (req, res) => {
  res.send(path.resolve(__dirname));
})
app.get('/a', (req, res) => {
    console.log(req.headers['user-agent'])
    res.write('a')
    res.end();
})
const port = '8081'
app.listen(port, () => {
    console.log(__dirname + port)
})

function test(a, b) {
  console.log(this)
  console.log(a)
  console.log(b)
}
const content = fs.readFileSync('src/index.js')
test.call({hehe: 'hehe'}, 1 , 2)
process.stdout.write(content);
module.exports = app

