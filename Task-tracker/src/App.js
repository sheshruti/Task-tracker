import Header from './component/Header';
import { Tasks } from './component/Tasks';
import AddTask from './component/AddTask';
//import React from 'react';
import './App.css';
import { useState } from "react"

function App() {
 // const name ='Shruti'
 const [showAddTask , setShowAddTask] = useState(false)
 const [tasks , setTasks] = useState([
  {
    id: 1,
    text: "Task1",
    date : "this day",
    time: "This time",
    reminder : false
},
{
    id: 2,
    text: "Task 2",
    date: "That day",
    time: "That time",
    reminder : true
},
{
    id: 3,
    text: "Task-3",
    date: "Today",
    time: "Then time",
    reminder : true
}
 ])
//delete 
const deleteTask = (id) => {
   setTasks(tasks.filter((task) => task.id !==id))
}
///Toggle reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id ===id ? {...task, reminder: !task.reminder} : task  ))
}
//addTask
const addTask = (task) => {
  console.log(task)
  const id = Math.floor(Math.random()*1000)+1 
  const newTask = {id,...task}
  setTasks([...tasks , newTask])
  
} 

  return (
    <>
    <div className='container'>
    <Header onAdd={()=> setShowAddTask(!showAddTask )} showAdd={showAddTask}/>
    {showAddTask && <AddTask onAdd ={addTask} />}
    {tasks.length > 0 ? <Tasks tasks={tasks} onDelete = {deleteTask} onToggle={toggleReminder} />
     : <h3 className='no-task'>No Task</h3>}
    </div>
    </>
  );
} 
export default App;
/*{
      id: 1,
      text: "Task1",
      date : "this day",
      time: "This time",
      reminder : false
  },
  {
      id: 2,
      text: "Task 2",
      date: "That day",
      time: "That time",
      reminder : true
  },
  {
      id: 3,
      text: "Task-3",
      date: "Today",
      time: "Then time",
      reminder : true
  }
  */