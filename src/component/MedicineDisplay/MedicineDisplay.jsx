import React, { useContext } from 'react';
import './MedicineDisplay.css';
import { StoreContext } from '../../Context/storecontext';
import MedicineItem from '../MedicineItem/MedicineItem';

const MedicineDisplay = ({category}) => {
    const {medicine_list}=useContext(StoreContext)
  return (
    <div className='medicine_display' id='medicinie_display'>
      <h2>Your Medicines Are Here!!!</h2>
      <div className="medicine-display-list">
        {medicine_list.map((item,index)=>{
          if (category==="All" || category===item.category)
          {
        return<MedicineItem key={index} id={item._id} name={item.name} price={item.price} description={item.description} image={item.image}/>
 } })}
      </div>

    </div>
      
  );
}

export default MedicineDisplay;
