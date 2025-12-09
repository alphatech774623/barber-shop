import React from 'react'
import { useSelector } from 'react-redux'
import { CiUser } from "react-icons/ci";
import { FaRegEnvelope } from "react-icons/fa6";
import { AiOutlineLogout } from "react-icons/ai";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUserInfo } from '../redux/slices/counterSlice';
const Account = () => {
    const dispatch = useDispatch()
    const user = useSelector(state=>state.user);
    const handleLogout = async ()=>{
        try {
            const result = await axios.post("http://localhost:5000/api/auth/logout", {}, {withCredentials : true})
            dispatch(setUserInfo(result.data));
        } catch (error) {
            console.log(error.message)
        }
    }
  return (
    <div className='account'>
        <p><b><CiUser/> {user?.userInfo?.name}</b> </p>
        <p><b><FaRegEnvelope/> {user?.userInfo?.email}</b></p>
        <button className='btn' onClick={handleLogout}><b><AiOutlineLogout /> Logout</b></button>

    </div>
  )
}

export default Account
