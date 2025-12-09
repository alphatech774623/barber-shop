import React, { useEffect } from 'react'
import Header from './Component/Header'
import Register from './Component/Register'
import Login from './Component/Login.'
import Booking from './Component/Booking'
import About from './Component/About'
import Admin from './Component/Admin'
import Hero from './Section/Hero'
import Whychoose from './Section/Whychoose'
import Pricing from './Section/Pricing'
import Services from './Section/Services'
import Gallery from './Section/Gallery'
import Testimonial from './Section/Testimonial'
import Contact from './Section/Contact'
import Footer from './Component/footer'
import {BrowserRouter, Route,Routes} from 'react-router-dom'

import './App.css'
import Home from './Component/Home/Home'
import { useSelector } from 'react-redux'
import useGetCurrentUser from '../hooks/useGetCurrentUser'



const App = () => {
    useGetCurrentUser()
  const user = useSelector((state)=>state.user)
  // console.log(user)
  return (
    <>
    <BrowserRouter>
      <Header />
     <Routes>

      <Route path='/' element={<Home/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/testimonial' element={<Testimonial/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/booking' element={<Booking/>}/>
        <Route path='/admin' element={<Admin/>}/>
     
     </Routes>
                <Footer />
         </BrowserRouter>

    </>
  )
}

export default App
