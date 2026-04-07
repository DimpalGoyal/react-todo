import { useState } from 'react'
import { CreateTodo } from './components/CreateTodo'
import { Todo } from './components/Todos'
import { useEffect } from 'react'

function useTodos(){
  const [todos, setTodos] = useState([])
  useEffect(()=>{
  fetch('http://localhost:8001/todos').then( async(res)=>{
    const json = await res.json()
    setTodos(json.allTodos)
  }) 
  },[])
  return todos;
}

function App() {
  const todos = useTodos();
  return (
    <>
      <CreateTodo/>
      <Todo todos={todos}/>
    </>
  )
}

export default App
