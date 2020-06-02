const express = require('express')
const app = express()
const {router1} = require('./router1')
const path = require('path')

// app.use('/static', express.static(path.resolve(__dirname, './test')))
app.use('/static', express.static('test'));
app.get('/static/*', (req, res) => {
  res.send('enene???')
})
app.get('*', (req, res) => {
  res.send('enen hello world')
})

app.get('/hello', (req, res) => {
  res.send('enen hello world')
})

app.use(router1);

app.listen(8081, (a) => {
  console.log(a)
  console.log('listen at 8080')
})