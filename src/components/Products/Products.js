import React from 'react';
import './Products.css'
const Products = ({ bag }) => {
     const { image, price, name } = bag
     console.log(bag)
     return (
          <div>
               <div>
                    <img src={image} alt="" />
               </div>
               <div>
                    <h4>Name: {name}</h4>
                    <p>Price: $ {price}</p>
               </div>
               <button>
                    <p>Add to Cart</p>
               </button>
          </div>
     );
};

export default Products;