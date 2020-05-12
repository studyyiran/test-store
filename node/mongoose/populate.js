const mongoose = require('mongoose')

const {Schema, model} = mongoose

const StudentSchema = Schema({
    name: String,
    info: [
        {
            age: Number,
            arr: [
                {
                    school: {
                        type: String,
                    }
                }
            ]
        }
    ],
    school: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'School'
        }
    ]
})

const SchoolSchema = Schema({
  schoolName: String
})

const StudentModel = model('Student', StudentSchema)
const School = model('School', SchoolSchema)

const connect = () => mongoose.connect('mongodb://localhost/test', {})

async function start() {
    await connect()
    await StudentModel.deleteMany();
    const newSchool = await School.create({schoolName: '1', _id: new mongoose.Types.ObjectId()})
    const newStudent = await StudentModel.create({name: 's1', school: [newSchool._id], info: [{age: 123,arr: [{school: newSchool._id}]}]})
    const result = await StudentModel.findOne({})
    const school = await School.find()
    // const result = await StudentModel.findOne()
    console.log(result)
    console.log(result.info[0].arr)

}

start();