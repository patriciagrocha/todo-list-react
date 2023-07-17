import { useState } from 'react';
import './App.css'
import AddTask from './components/AddTask'
import ListItem from './components/ListItem/ListItem';

function App() {
  
const [tasksList, setTasksList] = useState([]);

function addNewTask(inputValue) {
  if(inputValue == "") {
    alert("Insira uma tarefa!")
    return
  }
  const newTask = {
    id: tasksList.length + 1,
    taskValue: inputValue,
    isDone: false
  }
  setTasksList([...tasksList, newTask])
}

  return (
    <>   
    <AddTask addNewTask = {addNewTask} />
    <div>
      <ul>
        {tasksList.map( task => (
          <ListItem key={task.id} id={task.id} taskText={task.taskValue} isDone={task.isDone} />
        ))}
      </ul>
    </div>
    </>
  )
}

export default App
