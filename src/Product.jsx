import React from 'react'

import './Product.css'

import { useStateValue } from './StateProvider'

function Product({id,title,image,price,rating}) {
  return (
  
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className='product__price'>
                    <small>💲</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {[...new Array(rating)].map(()=> (
                        <p>
                            ⭐
                        </p>
                    ))}
                </div>
            </div>
            <img src={image} alt="" />
            <button onClick={addToBasket}>Add to Backet</button>
        </div>
    
  )
}

export default Product 