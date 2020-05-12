const mongoose = require('mongoose')

const {Schema, Model} = mongoose

const StudentSchema = Schema({
    name: String,
    info: [
        {
            arr: [
                {
                    school: {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: 'School'
                    }
                }
            ]
        }
    ]
})

const SchoolSchema = Schema({
  schoolName: String
})

const StudentModel = Model('Student', StudentSchema)
const SchoolModel = Model('School', SchoolSchema)

const connect = mongoose.connect('mongod://localhost/test', {})

async function start() {
    await connect()
    const newSchool = await SchoolModel.create({schoolName: '1'})
    const newStudent = await StudentModel.create({name: 's1', info: [{arr: [{school: newSchool._id}]}]})
    const result = await SchoolModel.findOne({}).populate('school').exec()
    console.log(result)
}