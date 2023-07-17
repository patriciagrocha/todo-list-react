import { useState } from "react";


export default function AddTask(props){

  const [task, setTask] = useState("");

  function handleAddTask(){
    // eslint-disable-next-line react/prop-types
    props.addNewTask(task);
    setTask("")
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