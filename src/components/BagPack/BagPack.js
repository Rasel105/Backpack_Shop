import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './BackPack.css'
const BagPack = () => {
     const [bags, setBags] = useState([])
     const [cart, setCart] = useState([])
     const [clear, setClear] = useState([])
     const [random, setRandrom] = useState([]);
     useEffect(() => {
          fetch('data.json')
               .then(res => res.json())
               .then(data => setBags(data))
     }, [])
     // console.log(bags)
     const handleAddToCart = product => {
          const newCart = [...cart, product]
          setCart(newCart)
     }
     const handledForMe = (cart) => {
          setClear(cart.length = 0)
     }

     const randomData = (carts) => {
          const cart = carts
          const randomIndex = Math.floor(Math.random() * cart.length);
          const item = cart[randomIndex];
          setRandrom(item)
     }
     console.log(random)
     return (
          <div className='bag-card-container'>
               <div className='cag-card'>
                    {
                         bags.map(bag => <Products key={bag.id} bag={bag} handleAddToCart={handleAddToCart} />)
                    }
               </div>
               <div className='add-to-cart-container'>
                    {
                         <Cart random={random} cart={cart} randomData={randomData} handledForMe={handledForMe} />
                    }

               </div>
          </div>
     );
};

export default BagPack;