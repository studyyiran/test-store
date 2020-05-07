const express = require('express')
const app = express()
const {router1} = require('./router1')

app.get('/', (req, res) => {
  res.send('enen hello world')
})

app.get('/hello', (req, res) => {
  res.send('enen hello world')
})

app.use(router1);

app.listen(8080, (a) => {
  console.log(a)
  console.log('listen at 8080')
})