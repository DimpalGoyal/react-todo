const dotenv = require('dotenv')
const mongoose = require('mongoose')
dotenv.config();

mongoose.connect(process.env.DB_URL)

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
})

const todo = mongoose.model('react-todo', todoSchema)

module.exports = {
    todo: todo
}