import { useEffect } from "react";
import { useState } from "react";

export function CreateTodo() {
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState([]);

  return (
    <div>
      <input
        id="title"
        type="text"
        placeholder="title"
        onChange={(e) => {
          const value = e.target.value;
          setTitle(value);
        }}
      ></input>
      <br></br>
      <br></br>
      <input
        id="description"
        type="text"
        placeholder="description"
        onChange={(e) => {
          const value = e.target.value;
          setDescription(value);
        }}
      ></input>
      <br></br>
      <br></br>
      <button onClick={()=>{
          fetch('http://localhost:8001/todo',{
            method:"POST",
            body:JSON.stringify({
              title: title,
              description: description
            }),
            headers:{"content-type":"application/json"}
          }).then(async(res)=>{
            const json = await res.json();
            res.send({json}) 
          })
      }}>add todo</button>
      <br></br>
      <br></br>
    </div>
  );
}
