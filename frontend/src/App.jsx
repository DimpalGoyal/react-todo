import { useMemo, useState } from 'react'
import { CreateTodo } from './components/CreateTodo'
import { Todo } from './components/Todos'
import { useEffect } from 'react'

function useTodos(){
  const [todos, setTodos] = useState([])

  const fetchTodos = async() => {
    const res = await fetch('http://localhost:8001/todos')
    const json = await res.json()
    setTodos(json.allTodos)
  }

  useEffect(()=>{
    fetchTodos()
  },[])
  return { todos, refetch: fetchTodos }
}

function App() {
  const { todos, refetch } = useTodos();
  return (
    <>
      <CreateTodo onSuccess={refetch} />
      <Todo todos={todos}/>
    </>
  )
}

export default App
