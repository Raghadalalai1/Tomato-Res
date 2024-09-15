import React, { useContext } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext';
import { Link } from 'react-router-dom';
export default function PlaceOrder() {
  const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <form className='place-order'>
      <div className='place-order-left'>
        <p className='title'>Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name' required/>
          <input type="text" placeholder='Last Name'  required/>
        </div>
        <input type="email" placeholder='Email Adress' required/>
        <input type="text"  placeholder='street' required/>
        <div className="multi-fields">
          <input type="text" placeholder='City' required/>
          <input type="text" placeholder='State' required />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip Code' required/>
          <input type="text" placeholder='Country' required/>
        </div>
        <input type="tel" placeholder='Phone' required/>
      </div>
      <div className='place-order-right'>
      <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
          <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
            <p>Delivery Free</p>
            <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
            <p className='totaal'>Total</p>
            <p className='totaal'>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
            </div>
            
          </div>
         <button>Procced To Payment </button>
        </div>
      </div>
    </form>
  )
}
