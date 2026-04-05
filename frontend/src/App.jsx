import { useState } from 'react'
import { CreateTodo } from './components/CreateTodo'
import { Todo } from './components/Todos'
import { useEffect } from 'react'

function App() {
  const [todos, setTodos] = useState([])
  useEffect(()=>{
  fetch('http://localhost:8001/todos').then( async(res)=>{
    const json = await res.json()
    setTodos(json.allTodos)
  }) 
  },[])

  return (
    <>
      <CreateTodo/>
      <Todo/>
      <div>
        {todos.map((todo)=>{
          return(
            <div style={{padding:'4px 2px', border: 'solid 1px black'}}>
            <h2>{todo.title}</h2>
            <p>{todo.description}</p>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App
