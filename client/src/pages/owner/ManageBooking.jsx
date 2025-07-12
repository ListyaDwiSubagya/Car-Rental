import React, { useEffect, useState } from 'react'
import { dummyMyBookingsData } from '../../assets/assets'

const ManageBooking = () => {

    const [bookings, setBookings] = useState([])

    const fetchOwnerBooking = async () => {
        setBookings(dummyMyBookingsData)
    }

    useEffect(() => {
        fetchOwnerBooking()
    },[])

  return (
    <div></div>
  )
}

export default ManageBooking