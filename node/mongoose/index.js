const mongoose = require('mongoose');

const connect = () => {
  return mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
}

const studentSchema = new mongoose.Schema({
  name: String,
})

const Student = new mongoose.model('studentdocumentname', studentSchema)

connect().then(async () => {
  console.log('finish!')
  const studuntA = await Student.create({
    name: 'yiran123'
  })
  console.log(studuntA)
  const list = await Student.find({});
  console.log(list)
})