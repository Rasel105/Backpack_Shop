import React from 'react';
import CartDetails from '../CartDetails/CartDetails';
import './Cart.css'
const Cart = ({ cart }) => {
     // console.log(cart)
     // for (const product of cart) {
     // }
     cart.map(pro => console.log(pro.name));

     return (
          <div className='cart'>
               <h2>Added items</h2>
               <p>Total item: {cart.length}</p>
               {
                    cart.map(items => <CartDetails key={items.id} items={items} />)
               }
               <div>
                    <button className='cart-btn'>Choose one for me</button>
                    <button className='cart-btn'>Choose Again</button>
               </div>
          </div>
     );
};

export default Cart;