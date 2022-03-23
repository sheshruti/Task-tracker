import React from 'react'
import { useState } from 'react'

const AddTask = ({onAdd}) => {
  const [text,setText] = useState('')
  const [date,setDate] = useState('')
  const [time,setTime] = useState('') 
  const [reminder,setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
 
    if(!text){
      alert('Please add a task!')
      return
    }
    onAdd({text,date,time,reminder})
    setDate('')
    setText('')
    setTime('')
    setReminder(false);
  }

  return (
    <form className='form' onSubmit={onSubmit}>
        <div className='form-control'>
            <label>Task</label>
            <input type='text' placeholder='Add Task'
            value={text} onChange={(e) => setText(e.target.value)} />
        </div><div className='form-control'>
            <label>Day</label>
            <input type='text' value={date} onChange={(e) => setDate(e.target.value)} />
            <label>Time</label>
            <input type='text' value={time} onChange={(e) => setTime(e.target.value)}/>
        </div><div className='form-control form-control-check'>
            <label>Set Reminder</label>
            <input type='checkbox' checked ={reminder}
             value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
        </div>
        <input type='submit' value='Add Task'
            className='btn btn-add-task'/>
    </form>
  )
}

export default AddTask