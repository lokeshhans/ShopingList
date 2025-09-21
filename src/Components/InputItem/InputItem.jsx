import React, { useState } from 'react'
import './Inputitem.css'
import 'react-toastify/dist/ReactToastify.css'
import { ShowSucess } from '../../Utils/ShowTosts'


function InputItem({addItem}) {
  const [ inputVal, setInputVal] = useState('')
  return (
    <div className='Item-input-wrapper'>
        <input type="text" 
        placeholder='Add an item' 
        value={inputVal} 
        onChange={(e) => setInputVal(e.target.value)}/>
        <button 
          className='item-add-btn' 
          onClick={()=>{
            ShowSucess(`${inputVal} Added SucessFully!`)
            addItem(inputVal)
            setInputVal("")
          }}
          >
            Add
        </button>
    </div>
  )
}

export default InputItem