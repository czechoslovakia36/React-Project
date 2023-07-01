import React from 'react'
import './Home.css'

import Product from './Product'

function Home() {
  return (
    <div>
        <div className="home">
            <div className="home__container">
            <img src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg" alt="" className="home__image" />


<div className="home__row">
<Product
    id="1"
    title="IFB 30 L Convection Microwave Oven (30BRC2, Black, With Starter Kit)"
    price={11.96}
    rating={5}
    image="https://images-na.ssl-images-amazon.com/images/I/81D8pNFmWzL._SL1500_.jpg"

/>
<Product />

</div>

<div className="home__row">

<Product />
<Product />
<Product />
    
</div>
<div className="home__row">
<Product />
</div>
            </div>
        </div>
    </div>
  )
}

export default Home