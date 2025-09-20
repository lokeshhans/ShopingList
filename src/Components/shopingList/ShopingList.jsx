import React from 'react'
import Header from '../Header/Header'
import InputItem from '../InputItem/InputItem'
import './ShopingInput.css'
import ItemList from '../ItemList/ItemList'
import { ToastContainer, toast } from 'react-toastify';

function ShopingList() {
const shopingItems = [{
  id:1, name:"Lokesh", quantity:1,
},
{
  id:2, name:"Karan",quantity:2,
},
{
  id:3, name:"Lokesh",quantity:3,
}]


const notify = () => toast(`${shopingItems.name} item add in list..👍`);


  return ( <>
      <Header  />
      <div className="current-shopping-list">
        <InputItem notify={notify} /> 
        <ToastContainer />
      </div>
      <div className="item-list">
        <ItemList 
        ShopingItem={shopingItems}
        />
      </div>
    </>
  )
}

export default ShopingList