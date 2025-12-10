import React, { useEffect, useState } from 'react'
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
import useGetBooking from '../hooks/useGetBooking'
import MyBookings from './Component/MyBookings'
import { Navigate } from 'react-router-dom'


const App = () => {
    useGetCurrentUser()
    useGetBooking()
  const user = useSelector((state)=>state.user);
  const [role, setRole] = useState(null)
  const isLogin = user?.userInfo;
 useEffect(() => {
    if (isLogin) {
      setRole(user?.userInfo?.role);
    } else {
      setRole(null);  // user logout ho jaye to role reset
    }
  }, [isLogin]);

  return (
    <>
    <BrowserRouter>
     { role !== "admin" && <Header />}
     <Routes>

      <Route path='/' element={(role == "admin" ? (<Navigate to="/admin"/>) : <Home/>)}/>
        <Route path='/register' element={!isLogin ? <Register/> : (<Navigate to="/"/>)}/>
        <Route path='/login' element={!isLogin ? <Login/> : (<Navigate to="/"/>)}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/booking' element={role == "user" ? <Booking/> : (<Navigate to="/"/>)}/>
        <Route path='/admin' element={role == "admin" ? <Admin/> : (<Navigate to="/"/>)}/>
        <Route path='/myBookings' element={role == "user" ? <MyBookings/> : (<Navigate to="/"/>)}/>
     
     </Routes>
                <Footer />
         </BrowserRouter>

    </>
  )
}

export default App
