import React from 'react'

const AddTask = () => {
  return (
    <form className='form'>
        <div className='form-control'>
            <label>Task</label>
            <input type='text' placeholder='Add Task'/>
        </div><div className='form-control'>
            <label>Day</label>
            <input type='date' />
            <label>Time</label>
            <input type='time'/>
        </div><div className='form-control form-control-check'>
            <label>Set Reminder</label>
            <input type='checkbox'/>
        </div>
        <input type='submit' value='Add Task'
            className='btn btn-add-task'/>
    </form>
  )
}

export default AddTask