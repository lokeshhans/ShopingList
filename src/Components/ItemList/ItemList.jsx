import React from "react";
import "./ItemList.css";
import Item from "../Item/Item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";

function ItemList({ ShopingItem }) {
  return (
    <div className="shoping-item-wrapper">
      {ShopingItem &&
        ShopingItem.map((item) => {
          return (
            <div key={item.id} className="shoping-item-container">
              <div className="icon-plus icons">
                <FontAwesomeIcon icon={faPlus} />
              </div>
              <Item itemName={item.name} quantity={item.quantity} />
              <div className="icon-minus icons">
                <FontAwesomeIcon icon={faMinus} />
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default ItemList;
