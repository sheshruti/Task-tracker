import Header from './component/Header';
import { Tasks } from './component/Tasks';
import AddTask from './component/AddTask';
//import React from 'react';
import './App.css';
import { useState } from "react"

function App() {
 // const name ='Shruti'
 const [tasks , setTasks] = useState([
  {
      id: 1,
      text: "Task1",
      time: "This time",
      reminder : false
  },
  {
      id: 2,
      text: "Task 2",
      time: "That time",
      reminder : true
  },
  {
      id: 3,
      text: "Task-3",
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
  return (
    <>
    <div className='container'>
    <Header />
    <AddTask/>
    {tasks.length > 0 ? <Tasks tasks={tasks} onDelete = {deleteTask} onToggle={toggleReminder} />
     : 'No Tasks'}
    </div>
    </>
  );
}

// class App extends React.Component{
//   render(){
//     return (
//           <>
         
//           <Header/>
//           </>
//         );
//   }
// }

export default App;
