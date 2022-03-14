import React from 'react'
import {FaTimes} from 'react-icons/fa'
const Task = ({task,onDelete }) => {
  return (
    <div className="task">
        <h3>{task.text}<FaTimes style={{cursor:'pointer' ,color:'red' }} 
        onClick={()=> onDelete(task.id)} /></h3>
        <p>{task.time}</p>
    </div>
  )
}

export default Task