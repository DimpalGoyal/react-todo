import { useState } from "react";

export function CreateTodo() {
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState([]);

  function addTodo(){}

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
      <button>add todo</button>
      <br></br>
      <br></br>
    </div>
  );
}
