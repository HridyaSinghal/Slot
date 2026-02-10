import React from 'react'
import { ContextAPI } from '../Context';
import { useContext } from 'react'; 

const BookedSlot = () => {
  const {bookSlots} = useContext(ContextAPI);
  return (
    <div>
      
    {
      bookSlots.map((ele , key) => (
<div key={key} className='w-72 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300'>
<div className='bg-gradient-to-r from-blue-500 to-blue-600 p-4'>
  <span className='text-white font-semibold'>Available</span>
</div>
<div className='p-6 space-y-3'>
<h1 className='text-lg font-medium text-gray-700'><span className='font-bold'>Date:</span> {ele.date}</h1>
<h1 className='text-lg font-medium text-gray-700'><span className='font-bold'>Time:</span> {ele.time}</h1>
<h1 className='text-lg font-medium text-gray-700'><span className='font-bold'>Status:</span> {ele.status}</h1>
<button className='w-full mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300 ' onClick={() => {
setBookSlots([...setBookSlots , ele])
}}>Cancel Booking</button>
    </div>
    </div>
      ))
    }
    </div>
  )
}

export default BookedSlot
