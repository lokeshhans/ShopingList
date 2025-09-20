import React from 'react'
import Item from '../Item/Item'

function ItemList({ShopingItem}) {
  return (
    <div className="shoping-item-wrapper">
        {
            ShopingItem && ShopingItem.map((item)=>{
                return <Item 
                itemName={item.name}
                key={item.id}
                quantity= {item.quantity}
                />
            }
              
            )
        }
    </div>
  )
}

export default ItemList