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

     // console.log(cart)
     // if (cart.length > 4) {
     //      alert("You can'not add more than 4")
     // }

     const handleAddToCart = product => {
          let newCart = [...cart, product]
          // console.log(newCart)
          if (newCart.length > 4) {
               alert("You can't add more that 4");
          }
          setCart(newCart)
     }
     const chooseAgain = (cart) => {
          // console.log(cart, clear)
          let deleteData = [...clear, cart.length = 0];
          // setClear(cart.length = 0)

          setClear(deleteData)
     }

     const randomData = (carts) => {
          const cart = carts
          const randomIndex = Math.floor(Math.random() * cart.length);
          const item = cart[randomIndex];
          setRandrom(item)
     }
     // console.log(clear)
     return (
          <div className='hold-ul'>
               <h1>Backpack Shop</h1>
               <h4>Let's Explore online Shopping!</h4>
               <div className='bag-card-container'>
                    <div className='bag-card'>
                         {
                              bags.map(bag => <Products key={bag.id} bag={bag} handleAddToCart={handleAddToCart} />)
                         }
                    </div>
                    <div className='add-to-cart-container'>
                         {
                              <Cart random={random ? random : {}} cart={cart} randomData={randomData} chooseAgain={chooseAgain} />
                         }

                    </div>
               </div>
          </div>

     );
};

export default BagPack;