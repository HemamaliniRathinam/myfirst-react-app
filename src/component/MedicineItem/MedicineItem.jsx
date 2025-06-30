import React, { useContext} from 'react';
import './MedicineItem.css';
import assets from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';

const MedicineItem = ({id,name,price,description,image}) => {
 
const{cartItems, addToCart, removeFromCart}=useContext(StoreContext);
  return (
    <div className="medicine-item">
        <div className="medicine-img-container">
            <img className="medicine-item-img" src={image} alt=""/>
            {
              !cartItems[id]
             ? <img className='add' onClick={()=>addToCart(id)} src={assets.addicon} alt=""/>
              
              :<div className='medicine-item-counter'>
                <img onClick={()=>removeFromCart(id)} src={assets.reduceicon} alt=""/>
                <p>{cartItems[id]}</p>
                <img onClick={()=>addToCart(id)} src={assets.addicon} alt=""/>

            
                </div>
}

        </div>
        <div className="medicine-item-info">
            <div className="medicine-item-name-rating">
                <p>{name}</p>
                <img src={assets.starrating} alt=""/>
                 </div>
                <p className="medicine-item-description">{description}</p>
                <p className="medicine-item-price">${price}</p>
           
        </div>
      
    </div>
  );
}

export default MedicineItem;
