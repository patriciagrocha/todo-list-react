import { useState } from "react";


export default function AddTask(){

  const [task, setTask] = useState("");

  function handleAddTask(){
  setTask(task)
  console.log(task);

  }

  return(
    <div>
      <h1>TODO LIST</h1>
      <input 
      type="text"
      value={task}
      onChange={(e) => setTask(e.target.value)}
      placeholder="Digite uma tarefa"/>

      <button onClick={ () => handleAddTask()} >Adicionar</button>
    </div>
  )
}