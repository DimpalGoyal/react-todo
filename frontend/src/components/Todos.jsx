export function Todo({todos}){
    return(
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
    )
}