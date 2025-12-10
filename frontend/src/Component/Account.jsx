import React from 'react'
import { useSelector } from 'react-redux'
import { CiUser } from "react-icons/ci";
import { FaRegEnvelope } from "react-icons/fa6";
import { AiOutlineLogout } from "react-icons/ai";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUserInfo } from '../redux/slices/counterSlice';
import { setBookingInfo } from '../redux/slices/bookingSlice';
import { Link } from 'react-router-dom';
const Account = () => {
    const dispatch = useDispatch()
    const user = useSelector(state=>state.user);
    const handleLogout = async ()=>{
        try {
            const result = await axios.post("http://localhost:5000/api/auth/logout", {}, {withCredentials : true})
            dispatch(setUserInfo(null));
            dispatch(setBookingInfo(null));
        } catch (error) {
            console.log(error.message)
        }
    }
  return (
    <div className='account'>
        <p><b><CiUser/> {user?.userInfo?.name}</b> </p>
        <p><b><FaRegEnvelope/> {user?.userInfo?.email}</b></p>
         <Link to="/myBookings">My Bookings</Link>
        <button className='btn btn-danger' onClick={handleLogout}><b><AiOutlineLogout /> Logout</b></button>

    </div>
  )
}

export default Account
