import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'

export default function Footer() {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" className='footer-logo'/>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem recusandae quo commodi beatae omnis iure qui eum quos distinctio tempore veritatis accusamus vel, magnam, sapiente, inventore a blanditiis facere dolore.</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privecy Policy</li>
                    </ul>

                </div>


                <div className="footer-content-right">
                    <h2>GET IN TOUCH </h2>
                    <ul>
                        <li>+1-234-555-3455</li>
                        <li>contact@tometo.com</li>
                    </ul>
                </div>




            </div>
            <hr />
            <p className="footer-copyright">copyright <FontAwesomeIcon icon={faCopyright} style={{color: "#a1a1a1",}} /> 2024 Tometo.com  - All Right Reversed .</p>
        </div>
    )
}
