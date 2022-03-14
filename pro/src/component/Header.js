import React from 'react'
import Button from './Button'
const Header = () => {
    const onClick = (e) =>{
        console.log('Clicked')
    }
  return (
    <header className='header'>
        <h1>Task Tracker</h1>
        <Button text='Add' color='green' onClick={onClick} />
    </header>
  )
}

export default Header