import React from "react";
import "./ItemList.css";
import Item from "../Item/Item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { ShowError } from '../../Utils/ShowTosts'


function ItemList({ ShopingItem,addquantity,subQuantity }) {
  return (
    <div className="shoping-item-wrapper">
      {ShopingItem &&
        ShopingItem.map((item) => {
          return (
            <div key={item.id} className="shoping-item-container">
              <div className="icon-plus icons" onClick={()=>addquantity(item.id)}>
                <FontAwesomeIcon icon={faPlus}
                 />
              </div>
              <Item itemName={item.name} quantity={item.quantity} />
              <div className="icon-minus icons" onClick={()=>{
                if(item.quantity == 1) ShowError(`${item.name} remove from the List...`);
                subQuantity(item.id)
              }}>
                <FontAwesomeIcon icon={faMinus} />
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default React.memo(ItemList);
