import React from 'react';
import './Cart.css'
const Cart = ({ cart }) => {
     console.log(cart)
     // for (const product of cart) {
     // }
     // cart.map(pro => console.log(pro.name));

     return (
          <div className='cart'>
               <h2>Added items</h2>
               <p>Total item: {cart.length}</p>
               {
                    cart.map(pro => <p>{pro.name}</p>)
               }
          </div>
     );
};

export default Cart;