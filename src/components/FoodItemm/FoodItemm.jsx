import React, { useContext, useState } from 'react'
import './FoodItemm.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
export default function FoodItemm({ id, name, price, description, image }) {

    const {cartItem,addToCart,removeFromCart}=useContext(StoreContext);
    return (
        <div className='food-item'>
            <div className='food-item-img-container'>
                <img src={image} alt="" className='food-item-image' />
                {!cartItem[id] ?
                    <img src={assets.add_icon_white} alt="" className='add' onClick={() => addToCart(id)

                    } />
                    :
                    <div className='food-item-counter'>
                        <img src={assets.remove_icon_red} alt="" onClick={()=>removeFromCart(id)}/>
                        <p className='quintity'>{cartItem[id]}</p>
                        <img src={assets.add_icon_green} alt="" onClick={()=>addToCart(id)}/>
                    </div>

                }

            </div>
            <div className='food-item-info'>
                <div className='food-item-name-rating'>
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p className='food-item-description'>
                    {description}
                </p>
                <p className='food-item-price'>${price}</p>
            </div>

        </div>
    )
}

