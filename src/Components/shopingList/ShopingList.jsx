import  { useState } from 'react'
import Header from '../Header/Header'
import InputItem from '../InputItem/InputItem'
import './ShopingInput.css'
import ItemList from '../ItemList/ItemList'
import { ToastContainer } from 'react-toastify'
import { v4 as uuidv4 } from 'uuid';

function ShopingList() {
const [shopingItems, setShopingItem] = useState([])

function handleAddItem (itemName){
  setShopingItem([...shopingItems, {id:uuidv4(), name:itemName, quantity: 1}])
  // console.log(uuidv4())
}
 function handleAddQuantity(itemId){
  const newShopingItems = shopingItems.map((item)=>{
    if(item.id == itemId) 
      item.quantity++ 
      return item
    })
    setShopingItem(newShopingItems)
   
 }
 function handleSubQuantity(itemId){
  let newShopingItems = shopingItems.map((item)=>{
    if(item.id == itemId) 
    (item.quantity > 0) && 
      item.quantity--;
      return item
    })
     newShopingItems = newShopingItems.filter((item) => item.quantity > 0)
    setShopingItem(newShopingItems)
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
        ShopingItem={shopingItems}
        subQuantity ={handleSubQuantity}
        addquantity={handleAddQuantity}
        />
      </div>
    </>
  )
}

export default ShopingList