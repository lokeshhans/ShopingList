import { useReducer } from 'react'
import Header from '../Header/Header'
import InputItem from '../InputItem/InputItem'
import './ShopingInput.css'
import ItemList from '../ItemList/ItemList'
import { ToastContainer } from 'react-toastify'
import ItemReducer from '../../Reducers/ItemReducer'
import { ShopingDispatchContext, ShoppingListContext } from '../../Providers/ShopingContext'

function ShopingList() {
const [ShopingItems, dispatch] = useReducer(ItemReducer, []) // use Reducer take two argument first is function reducer and sec is initial state  and it return state variable and dispatch... ///when you call an dispatch function an inside your dispatch function u pass an action and automaticaly call  reducer function and  pass state variable and make changes to state variable
  return ( <>
  <ShoppingListContext.Provider value={ShopingItems}>
    <ShopingDispatchContext.Provider value={dispatch}>
          <Header  />
          <ToastContainer />
          <div className="current-shopping-list">
            <InputItem /> 
          </div>
          <div className="item-list">
            <ItemList />
          </div>
      </ShopingDispatchContext.Provider>
    </ShoppingListContext.Provider>
    </>
  )
}

export default ShopingList