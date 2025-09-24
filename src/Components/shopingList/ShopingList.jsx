import { useReducer } from 'react'
import Header from '../Header/Header'
import InputItem from '../InputItem/InputItem'
import './ShopingInput.css'
import ItemList from '../ItemList/ItemList'
import { ToastContainer } from 'react-toastify'
import ItemReducer from '../../Reducers/ItemReducer'

function ShopingList() {
// const [shopingItems, setShopingItem] = useState([])
const [shopingItems, dispatch] = useReducer(ItemReducer, []) // use Reducer take two argument first is function reducer and sec is initial state  and it return state variable and dispatch... ///when you call an dispatch function an inside your dispatch function u pass an action and automaticaly call  reducer function and  pass state variable and make changes to state variable

function handleAddItem (name){
  dispatch({
    type: 'add_item',
    itemName: name
  }); // it take an argument just a plan js object it has type and 
}
function handleAddQuantity(id){
   dispatch({
   type: 'inc_item',
   itemId: id
 });
}

function handleSubQuantity(id){
  dispatch({
    type:'dec_item',
    itemId: id
  });
}

  return ( <>
      <Header  />
      <ToastContainer />
      <div className="current-shopping-list">
        <InputItem 
        addItem={handleAddItem}
        /> 
      </div>
      <div className="item-list">
        <ItemList 
        ShopingItem = {shopingItems}
        subQuantity ={handleSubQuantity}
        addquantity={handleAddQuantity}
        />
      </div>
    </>
  )
}

export default ShopingList