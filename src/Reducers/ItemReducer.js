import { v4 as uuidv4 } from "uuid";

function ItemReducer(shopingItems, action) {
  // what action perform on shoping item // reducer is a simple javascript function
  //the reducer always take two arguments usestate array and other action to perform
  if (action.type == "add_item") {
    //action have some own property like type to decide which action is perform and on this action some parameters are required to perform action like on add item we have required item name
    return [
      ...shopingItems,
      { id: uuidv4(), name: action.itemName, quantity: 1 },
    ];
  } else if (action.type == "inc_item") {
    const newShopingItems = shopingItems.map((item) => {
      if (item.id == action.itemId) quantity: item.quantity ++;
      return item;
    });
    return newShopingItems;
    // setShopingItem(newShopingItems)
  } else if (action.type == "dec_item") {
    let newShopingItems = shopingItems.map((item) => {
      if (item.id == action.itemId) item.quantity--;
      return item;
    });
    return newShopingItems.filter((item) => item.quantity > 0);
  }
}

export default ItemReducer;
