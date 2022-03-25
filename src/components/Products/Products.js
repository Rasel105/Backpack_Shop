import React from 'react';
import './Products.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Products = ({ bag }) => {
     const { image, price, name } = bag
     console.log(bag)
     return (
          <div className='product'>
               <img src={image} alt="" />
               <div className='product-info'>
                    <h4>Name: {name}</h4>
                    <p>Price: $ {price}</p>
               </div>
               <button className='add-to-cart'>
                    <p>Add to Cart</p>
                    <FontAwesomeIcon icon={faShoppingCart} size="xl" />
               </button>
          </div>
     );
};

export default Products;