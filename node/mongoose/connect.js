const mongoose = require('mongoose')
const {Schema, model} = mongoose


const connect = mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true})
connect.then(() => {
  console.log('start2')
})
const test = Schema({
  name: {
    type: String
  }
})
console.log('start0')
const Model = model('Model', test)
start();
// connect();
function start () {

  console.log('start1')
  Model.create({name:'gege'}).then(() => {
    console.log('start4')
  })
  var test = new Model({name: 'mami'});
  setTimeout(() => {
    Model.findById(test._id).then((result) => {
      console.log(result)
    })
  }, 1000)

  console.log('start3')
  // test.save((saveValue) => {
  //   console.log(saveValue)
  //   console.log('finish')
  // })
  test.save().then((value) => {
      console.log('then')
      console.log(value)
    }).catch((e) => {
      console.error(e);
      console.log('catch finish')
  })
  // Model.create({name: 'hehe'}).then(() => {
  //   Model.find({}).then((res) => {
  //     console.log(res)
  //   })
  // })
}
