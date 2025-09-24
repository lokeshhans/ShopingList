import './Inputitem.css'
import 'react-toastify/dist/ReactToastify.css'
import { ShowError, ShowSucess } from '../../Utils/ShowTosts'
import { useForm } from 'react-hook-form'
// import { useEffect } from 'react'


function InputItem({addItem}) {
  const {register, handleSubmit,formState: { errors }, reset} = useForm({
    mode:'onChange'
  })


  // Errors .............................................
  // useEffect(() => {
  //   if(errors.item && errors.item.type == 'required' ){
  //     ShowError("Item can't Empty");
  //   }
  //   else if(errors.item && errors.item.type == 'minLength'){
  //     ShowError("Item name not less than 3")
  //   }
  // }, [errors.item && errors.item.type])
  
  const handleSubmission = (data) =>{
    // console.log(data)
    ShowSucess(`${data.item} Added SucessFully!`)
    addItem(data.item)
    reset();
    
  }
  // console.log({...register("item", { required: true, minLength: 3 }) })
  return (
    <div className='Item-input-wrapper'>
      <form onSubmit={handleSubmit(handleSubmission)} >
          <input type="text" 
          placeholder='Add an item' 
          name='item'
          {...register("item", { required: true, minLength: 3 }) }/>
          <div>
            {errors.item && errors.item.type == 'required' && <p>Item is missing</p> }
            {errors.item && errors.item.type == 'minLength' && <p>Item name can't be less than 3 </p> }
          </div>
          <button className='item-add-btn' >
              Add
          </button>
        </form>
    </div>
  )
}

export default InputItem