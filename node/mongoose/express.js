const express = require('express')
const router = express.Router();
const {studentModel} = require('./test1')

const app = new express();

app.get('/', (req, res) => {
  res.send('hello')
})

app.use('/hehe', router)

router.get('/1', async (req, res) => {
  const result = await studentModel.find({});
  result.forEach((item) => {
    // its amazing
    item.agetest = Date.now()
  })
  res.send(result)
})

app.listen(8080, () => {
  console.log('is listening')
})