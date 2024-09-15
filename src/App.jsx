
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import { useState } from 'react'
import LogInPopup from './components/LogInPopup/LogInPopup'

function App() {
const [showPopup , SetShowPopup] = useState(false)

  return (
    <>
    {showPopup?<LogInPopup SetShowPopup={SetShowPopup} />:<></>}
   <Navbar SetShowPopup={SetShowPopup}/>
    <div className='app'>
   
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/Order' element={<PlaceOrder />} />

      
      </Routes>
    </div>
    <Footer />
    </>
  )
}

export default App
