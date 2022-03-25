import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './BackPack.css'
const BagPack = () => {
     const [bags, setBags] = useState([])
     useEffect(() => {
          fetch('data.json')
               .then(res => res.json())
               .then(data => setBags(data))
     }, [])
     // console.log(bags)
     const handleAddToCart = product => {
          console.log(product)
     }
     return (
          <div className='bag-card-container'>
               <div className='cag-card'>
                    {
                         bags.map(bag => <Products key={bag.id} bag={bag} handleAddToCart={handleAddToCart} />)
                    }
               </div>
               <div className='add-to-cart-container'>
                    <h1>Right side</h1>
               </div>
          </div>
     );
};

export default BagPack;