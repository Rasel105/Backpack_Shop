import React from 'react';
import CartDetails from '../CartDetails/CartDetails';
import './Cart.css'
const Cart = ({ cart, chooseAgain, randomData, random }) => {
     console.log(random)
     // for (const product of cart) {
     // }
     // cart.map(pro => console.log(pro.name));


     return (
          <div className='cart'>
               <h2>Added items</h2>
               <h5>{random.name}</h5>
               {
                    cart.map(items => <CartDetails key={items.id} items={items} />)
               }
               <div>
                    <button onClick={() => randomData(cart)} className='cart-btn'>Choose one for me</button>
                    <button onClick={() => chooseAgain(cart)} className='cart-btn'>Choose Again</button>
               </div>
          </div>
     );
};

export default Cart;