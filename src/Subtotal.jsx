import React from 'react'

import './Subtotal.css'

import CurrencyFormat from 'react-currency-format'


function Subtotal() {
  return (
    <div className="subtotal">
    <CurrencyFormat 
        renderText = {(value) => (
            <>
                <p>
                    Subtotal <strong>$20</strong>
                </p>
                <small className="subtotal__gift">
                    <input type="checkbox" /> This order contains a gift
                </small>
            </>
        )}

        decimalScale={2}
        value="20"
        displayType={"text"}
        thousandSeparator={true}
        
    />

    <button>Proceed to Checkout</button>
</div>
  )
}

export default Subtotal