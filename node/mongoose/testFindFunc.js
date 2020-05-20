const mongoose = require('mongoose');
const {Schema, model} = mongoose

mongoose.connect('mongodb://localhost/teststore').then(() => {
  console.log('have connect')
})

const friendSchema =Schema({
  name:String,
}, {_id: false, timestamps: true})

// 我的大小写是否正确？
const studentSchema = Schema({
  name: String,
  age: {
    type: Number,
    default: () => {
      return Date.now()
    }
  },
  friends: [friendSchema]
})



const StudentsModel = model('students', studentSchema)



const start = async () => {
  console.log('start')
  try {
    const s1 = new StudentsModel({name: 'xiaoming', friends: [{name: 'a'}, {name: 'b'}]});
    await s1.save()
    console.log('finish')
    // const target = await StudentsModel.findById(s1.id)
    const target = await StudentsModel.findOneAndUpdate({_id: s1.id}, {name: 'xiaoming2hao'}, {new: true})
    console.log(target)
    const list = await StudentsModel.find();
    console.log(list)
  } catch(e) {
    console.error(e)
  }

}
start()