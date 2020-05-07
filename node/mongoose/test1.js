const mongoose = require('mongoose')
const {Schema, model} = mongoose

const connect = async () => {
  return mongoose.connect('mongodb://localhost/test2',{}, () => {
    console.log('finish')
  })

}

const studentSchema = {
  name: {
    type: String,
    default: ''
  },
  age: Number
}

const studentModel = model('student', studentSchema)

const start = async () => {
  console.log('start11')
  await connect();
  console.log('start2')
  await studentModel.create({name: '1'});
  console.log('start3')
  const studentList = await studentModel.find();
  console.log('start4')
  console.log(studentList)
}

start()

module.exports = {
  studentModel
}


