import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

export default function Navbar({SetShowPopup}) {
  const {getTotalCartAmount} = useContext(StoreContext);
  const [menu,setMenu]=useState("home");
  const[active,setActive]=useState("list")
    
  const[toggleIcon,setToggleIcon]=useState("nav-toggle")

  const navToggle= ()=>{
      active==="list"?setActive("list nav-active"):setActive("list")
      toggleIcon==="nav-toggle"?setToggleIcon("nav-toggle toggle"):setToggleIcon("nav-toggle")
  }

  return (
    <div className='navbar'>
  <Link to={'/'}><img src={assets.logo} alt="" className='logo' /></Link>   
      {/* <ul className="navbar-menu">
        <li onClick={()=>setMenu('home')}  className={menu==='home'?'active':''}>Home</li>
        <li onClick={()=>setMenu('menu')}  className={menu==='menu'?'active':''}>Menu</li>
        <li onClick={()=>setMenu('Mobile App')} className={menu==='Mobile App'?'active':''}>Mobile App</li>
        <li onClick={()=>setMenu('Contact Us')} className={menu==='Contact Us'?'active':''}>Contact Us</li>
      </ul> */}
      <ul className={active}>
                <li><Link to={'/'}>Home</Link></li>
                <li><a href="#explore-menu"  >Menu</a></li>
                <li><a href="#app-download" >Mobile App</a></li>
                <li><a href="#footer"  >Contact Us</a></li>
          
            </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt="" />
        <div className='nav-search-icon'>
       <Link to={'/Cart'}>  <img src={assets.basket_icon} alt="" /></Link> 
          <div className={getTotalCartAmount()===0?'':'dot'}>

          </div>

        </div>
        <button onClick={()=>SetShowPopup(true)}>Sign in</button>
        <div className={toggleIcon} onClick={navToggle}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>

            </div>

      </div>
    </div>
  )
}
