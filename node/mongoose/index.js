const mongoose = require('mongoose');

const connect = async () => {
  return await mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
}

const studentSchema = new mongoose.Schema({
  name: String,
})

studentSchema.methods.baogao = function () {
  console.log(this.name)
  console.log(this.name)
}

const Student = new mongoose.model('studentdocumentname', studentSchema)

connect().then(async (db) => {
  console.log('test start!')
  var db = mongoose.connection;
  // db.dropDatabase();
  // const studuntA = await Student.create({
  //   name: 'yiran123'
  // })
  const target = 'aaaaaa'
  const studentB = new Student({
    name: target,
    age: 181,
  })
  studentB.save()
  const findTarget = await Student.findOne({name: target});
  console.log(findTarget)
  const studentC = new Student({
    name:'studentc'
  })
  const p1 = await studentC.save((err, student) => {
    console.log('2')
    console.log(student)
  })
  console.log(p1)
  // await studentB.save()
  // await studentC.save()
  // console.log(studentB)
  const list = await Student.find({});
  // console.log(list)
  console.log('1')
  // 1 查找
  const oneStudent = await Student.findOne({name: 'yiran'});
  console.log('3')
  console.log(oneStudent);
  oneStudent.baogao()
})

module.exports = {
  StudentModel: Student
}