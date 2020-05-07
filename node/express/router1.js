const express = require('express')
const router1 = express.Router();

router1.use((req, res, next) => {
  console.log('get')
  console.log(Date.now());
  next()
})

router1.get('/hehe', (req, res) => {
  res.send('haha')
})

module.exports = {
  router1
}