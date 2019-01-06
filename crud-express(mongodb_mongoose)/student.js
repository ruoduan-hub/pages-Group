var mongoose = require('mongoose')
//连接数据库
mongoose.connect('mongodb://localhost:27017/itcast',{useNewUrlParser: true})

var Schema = mongoose.Schema

//设计数据库
var studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    gender: {
        type: Number,
        enum: [0,1],
        default: 0,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    hobbies: {
        type: String,
    }
})

//直接导出 模型构造函数
module.exports = mongoose.model('Student',studentSchema)