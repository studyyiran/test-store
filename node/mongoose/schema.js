const mongoose = require('mongoose')
// const {StudentModel} = require('./index')
const connect = () => {
  return mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
}
function run () {
  console.log('start3')
  const teacherSchema = mongoose.Schema({
    name: {
      type: String,
      required: true,
      unique: true,
    },
    skill: {
      main: [
        {
          type: String,
          required: true
        }
      ],
      sub: {

      },
      fun: {

      }
    }
  }, {timestamps: true})

  const TeacherModel = mongoose.model('teacher', teacherSchema)


  const create = async (name) => {
    // return await
    return TeacherModel.create({name: name, skill: {main: ['math']}})
  }

  const search = async () => {
    // teacher是一个document对象
    try {
      console.log('start search')
      const firstTeacher1 = await TeacherModel.findOne();
      console.log(firstTeacher1)
      const firstTeacher2 = await TeacherModel.findByIdAndUpdate(firstTeacher1.id, {name: '223', skill: ['awu']}, {useFindAndModify: false, new: true}).exec();
      console.log(firstTeacher2)
      const firstTeacher3 = await TeacherModel.findOne();
      console.log(firstTeacher3)
      console.log('end search')
    } catch (e) {
      console.error(e)
    }
  }

  const test = async () => {
    await TeacherModel.deleteMany()
    await create('依然')
    await search()
  }
  test()

}
connect()

  setTimeout(() => {
    run()
  }, 1000)



