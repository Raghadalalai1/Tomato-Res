import React from 'react'
import './AppDawnload.css'
import { assets } from '../../assets/assets'
export default function AppDawnload() {
  return (
    <div className='app-download' id='app-download'>
      <p className='app-download-text'>For Experience Download <br /> Tomato App</p>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  )
}
