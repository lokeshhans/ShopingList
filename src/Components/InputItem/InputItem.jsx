import React from 'react'
import './Inputitem.css'

function InputItem({notify}) {
  return (
    <div className='Item-input-wrapper'>
        <input type="text" placeholder='Add an item' />
        <button className='item-add-btn' onClick={notify}>Add</button>
    </div>
  )
}

export default InputItem