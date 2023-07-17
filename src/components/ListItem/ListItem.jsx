import { useState } from "react";
import "./ListItem.style.css"

export default function ListItem(props) {

  const [isDone, setIsDone] = useState(props.isDone)

  return(
    
    <li className="list-item">
      <input 
      type="checkbox" 
      checked={isDone}
      onClick={() => setIsDone(!isDone)}
      />
      <span  className={isDone && 'isDone-Checked'}> {props.taskText}</span> 
      <button onClick={() => props.deleteTask(props.id)} >Remover</button>    
    </li>   
  )
}