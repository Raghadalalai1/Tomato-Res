import React, { useState } from 'react'
import './Home.css'
import Headar from '../../components/Headar/Headar'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDawnload from '../../components/AppDawnload/AppDawnload'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
export default function Home() {
  const [category,setCatecory]=useState('ALL')
  return (
    <div>
 
      <Headar />
      <ExploreMenu category={category} setCatecory={setCatecory}/>
      <FoodDisplay category={category} />
      <AppDawnload />
      
    </div>
  )
}
