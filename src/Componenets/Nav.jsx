import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <>
    <div className='w-full h-20 bg-gradient-to-r from-indigo-700 to-purple-700 text-white flex items-center justify-between px-8 shadow-lg'>
<div>
    <h1 className='text-2xl font-bold tracking-wide'>Slot-Booking</h1>
</div>
<div className='flex space-x-6'>
    <Link to="/available-slots" className='text-white hover:text-yellow-300 font-medium transition-colors duration-200'>Available Slots</Link>
    <Link to="/booked-slots" className='text-white hover:text-yellow-300 font-medium transition-colors duration-200'>Booked Slots</Link>
    <Link to="/create-slots" className='text-white hover:text-yellow-300 font-medium transition-colors duration-200'>Create Slots</Link>
    <Link to="/update-slots" className='text-white hover:text-yellow-300 font-medium transition-colors duration-200'>Update Slots</Link>
</div>
    </div>
    </>
  )
}

export default Nav
