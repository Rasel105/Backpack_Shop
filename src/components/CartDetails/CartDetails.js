import React from 'react';
import './CartDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import ChooseForMe from '../ChooseForMe/ChooseForMe';


const CartDetails = ({ items, random }) => {
     const { name, image } = items;
     console.log(random)
     return (

          <div>
               <div>
                    {
                         <ChooseForMe rando={random} />
                    }
               </div>

               <div className='cart-container'>
                    <img src={image} alt="" />
                    <h4>{name}</h4>
                    <FontAwesomeIcon icon={faTrash} size="xl" />
                    {/* <FontAwesomeIcon icon="fa-solid fa-circle-trash" /> */}


               </div>
          </div>

     );
};

export default CartDetails;