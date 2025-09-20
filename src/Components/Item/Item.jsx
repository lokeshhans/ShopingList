import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
  import './item.css'

function Item({ itemName, quantity }) {
  // console.log(itemName)
  return (
    <div className="item-wrapper">
      <div className="item-name">{itemName}</div>
      <div className="item-quantity">
        {quantity}
      </div>
      <div className="item-icon">
        <FontAwesomeIcon icon={faPlus} />
        <FontAwesomeIcon icon={faMinus} />
      </div>
      
    </div>
  );
}

export default Item;
