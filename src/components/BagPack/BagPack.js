import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './BackPack.css'
const BagPack = () => {
     const [bags, setBags] = useState([])
     const [cart, setCart] = useState([])
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
     return (
          <div className='bag-card-container'>
               <div className='cag-card'>
                    {
                         bags.map(bag => <Products key={bag.id} bag={bag} handleAddToCart={handleAddToCart} />)
                    }
               </div>
               <div className='add-to-cart-container'>
                    {
                         console.log(cart)
                    }
               </div>
          </div>
     );
};

export default BagPack;