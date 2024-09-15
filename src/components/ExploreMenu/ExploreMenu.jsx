import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'
export default function ExploreMenu({category,setCatecory}) {
    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore Our Menu</h1>
            <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of ishes crafted with the finest ingradients an culinary expertise our mission is to satisfy your cravings.</p>
            <div className='explore-menu-list'>

                {
                    menu_list.map((item, index) => {
                        return (
                            <div key={index} className='explore-menu-list-item' onClick={()=>{setCatecory(prev=>prev===item.menu_name?'ALL':item.menu_name)}}>
                                <img src={item.menu_image} alt="" className={category===item.menu_name?'active':''} />
                                <p>{item.menu_name}</p>
                            </div>
                        )
                    })
                }
            </div>
        
        </div>
        
    )
}
