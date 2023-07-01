import React from 'react'

import './Product.css'

function Product() {
  return (
  
        <div className="product">
            <div className="product__info">
                <p>"IFB 30 L Convection Microwave Oven (30BRC2, Black, With Starter Kit)"</p>
                <p className='product__price'>
                    <small>💲</small>
                    <strong>30</strong>
                </p>
                <div className="product__rating">
                    ⭐⭐⭐⭐⭐
                </div>
            </div>
            <img src="https://images-na.ssl-images-amazon.com/images/I/81D8pNFmWzL._SL1500_.jpg" alt="" />
            <button>Add to Backet</button>
        </div>
    
  )
}

export default Product 