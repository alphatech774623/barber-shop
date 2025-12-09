import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setUserInfo } from '../src/redux/slices/counterSlice'

const useGetCurrentUser = () => {
    const dispatch  = useDispatch()
    useEffect(()=>{
       const fetchCurrentUser = async ()=>{
         try {
            const currentUser = await axios.post(`http://localhost:5000/api/auth/getCurrentUser`, {}, {withCredentials : true})
            dispatch(setUserInfo(currentUser?.data))
        } catch (error) {
            console.log(error)
        }
       }

       fetchCurrentUser()
    },[])
}

export default useGetCurrentUser
