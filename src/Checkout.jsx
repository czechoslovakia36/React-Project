import React from 'react'
import './Checkout.css'

import Subtotal from './Subtotal'

import CheckoutProduct from './CheckoutProduct'

function Checkout() {
  return (
    <div className='checkout'>
       <div className="checkout__left">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/004/299/835/small/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-free-vector.jpg" alt="" className="checkout__ad" />
            <div>
                <h2 className="h2 checkout__title">
                    Your Shopping Basket
                </h2>
                <CheckoutProduct/>
            </div>
       </div>
       <div className="checkout__right">
            <Subtotal />
       </div>
    </div>
  )
}

export default Checkout