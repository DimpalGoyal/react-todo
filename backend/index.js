const {todo} = require('./db')
const { createTodo, updateTodo} = require('./types')
const express = require("express");
const app = express();

app.use(express.json());

// create a new todo
app.post("/todo", (req, res) => {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParsed(createPayload) 
  if(!parsedPayload.success){
    res.status(403).send({msg: 'invalid input'})
    return
  }
  // store data in mongodb
  
});

// fetch all todos
app.get("/todos", (req, res) => {
  // fetch all todos from database
});

// update the completed field
app.put("/completed", (req, res) => {
  // change the boolean from false to true for the req id
  
});

app.listen(8001, () => {
  console.log("server running ..");
});
