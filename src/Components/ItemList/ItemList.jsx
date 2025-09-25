import React, { useContext } from "react";
import "./ItemList.css";
import Item from "../Item/Item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { ShowError } from "../../Utils/ShowTosts";
import {
  ShoppingListContext,
  ShopingDispatchContext,
} from "../../Providers/ShopingContext";

function ItemList() {
  const ShopingItems = useContext(ShoppingListContext);
  const dispatch = useContext(ShopingDispatchContext);

  return (
    <div className="shoping-item-wrapper">
      {ShopingItems &&
        ShopingItems.map((item) => {
          return (
            <div key={item.id} className="shoping-item-container">
              <div
                className="icon-plus icons"
                onClick={() =>
                  dispatch({
                    type: "inc_item",
                    itemId: item.id,
                  })
                }
              >
                <FontAwesomeIcon icon={faPlus} />
              </div>
              <Item itemName={item.name} quantity={item.quantity} />
              <div
                className="icon-minus icons"
                onClick={() => {
                  if (item.quantity == 1)
                    ShowError(`${item.name} remove from the List...`);
                  dispatch({
                    type: "dec_item",
                    itemId: item.id,
                  });
                }}
              >
                <FontAwesomeIcon icon={faMinus} />
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default React.memo(ItemList);
