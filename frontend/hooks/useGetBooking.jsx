import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setBookingInfo } from '../src/redux/slices/bookingSlice'
const useGetBooking = () => {
    const dispatch = useDispatch();
  useEffect(()=>{
    const fetchBooking = async ()=>{
        try {
            const result = await axios.get("http://localhost:5000/api/auth/getMyBookings", {withCredentials : true});
            dispatch(setBookingInfo(result?.data.bookings))
        } catch (error) {
            console.log(error.message)
        }
    }

    fetchBooking()
  },[])
}

export default useGetBooking
