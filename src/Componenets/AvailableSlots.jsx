import React, { useEffect } from 'react'
import { useContext } from 'react';
import { ContextAPI } from '../Context';

const AvailableSlots = () => {
      const {slots} = useContext(ContextAPI);
const {bookSlots, setBookSlots} = useContext(ContextAPI);

  return (
    <>
    <div className='bg-gray-100 min-h-screen p-8'>
      <h2 className='text-3xl font-bold text-center text-gray-800 mb-8'>Available Slots</h2>
    <div className='flex flex-wrap gap-6 justify-center'>
    
    {
      slots.map((ele , key) => (
<div key={key} className='w-72 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300'>
<div className='bg-gradient-to-r from-blue-500 to-blue-600 p-4'>
  <span className='text-white font-semibold'>Available</span>
</div>
<div className='p-6 space-y-3'>
<h1 className='text-lg font-medium text-gray-700'><span className='font-bold'>Date:</span> {ele.date}</h1>
<h1 className='text-lg font-medium text-gray-700'><span className='font-bold'>Time:</span> {ele.time}</h1>
<h1 className='text-lg font-medium text-gray-700'><span className='font-bold'>Status:</span> {ele.status}</h1>
<button className={`w-full mt-4  text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300 ${bookSlots.includes(ele)?'cursor-not-allowed bg-gray-500':'cursor-pointer bg-green-500 hover:bg-green-600'}  `}
disabled={bookSlots.includes(ele)}
onClick={() => {
  if(bookSlots.includes(ele)){
    alert("Already Booked")
  }else{
setBookSlots([...bookSlots , ele])

  }
}}>Book Slot</button>
    </div>
    </div>
      ))
    }
  
    
    </div>
    </div>
    </>
  )
}

export default AvailableSlots
