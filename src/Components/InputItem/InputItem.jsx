import './InputItem.css'
import 'react-toastify/dist/ReactToastify.css'
import { ShowSucess } from '../../Utils/ShowTosts'
import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import { ShopingDispatchContext } from '../../Providers/ShopingContext'


function InputItem() {
  const dispatch = useContext(ShopingDispatchContext);
  const {register, handleSubmit,formState: { errors }, reset} = useForm({
    mode:'onChange'
  })
  
  const handleSubmission = (data) =>{
    ShowSucess(`${data.item} Added SucessFully!`)
    dispatch({
      type:'add_item',
      itemName: data.item
    })
    reset();
    
  }
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