import React from 'react'
import './Inputitem.css'

function InputItem() {
  return (
    <div className='Item-input-wrapper'>
        <input type="text" placeholder='Add an item' />
        <button className='item-add-btn'>Add</button>
    </div>
  )
}

export default InputItem