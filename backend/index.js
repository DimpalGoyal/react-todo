const {todo} = require('./db')
const { createTodo, updateTodo} = require('./types')
const cors = require('cors')
const express = require("express");
const app = express();

app.use(cors())
app.use(express.json());

// create a new todo
app.post("/todo", async(req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload) 
  if(!parsedPayload.success){
    res.status(403).send({msg: 'invalid input'})
    return
  }
  // store data in mongodb
    await todo.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false 
  })
  res.send({msg: "todo created"})

});

// fetch all todos
app.get("/todos", async(req, res) => {
  // fetch all todos from database
  const allTodos = await todo.find({}) 
  res.send({allTodos})
});

// update the completed field
app.put("/completed", (req, res) => {
  // change the boolean from false to true for the req id

});

app.listen(8001, () => {
  console.log("server running ..");
});
