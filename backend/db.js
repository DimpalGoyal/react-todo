const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://admin:tBiLoEWFPhxpVhZI@cluster0.mvkomnu.mongodb.net/react-todo')

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
})

const todo = mongoose.model('react-todo', todoSchema)

module.exports = {
    todo: todo
}