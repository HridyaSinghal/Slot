import React, { useState } from 'react'
import { useContext } from 'react';
import { ContextAPI } from '../Context';
import CreateSlot from './CreateSlot';
const editform = (ele) => {

  const {updated , setUpdated} = useState();
  

  return (

    <>
 <div  className='min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4' >

    <div className='bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md'>
    <h1 className='text-3xl font-bold text-center text-indigo-600 mb-8'>Create Slot</h1>
      
      <div className='space-y-4'>
      <div>
      <label className='block text-gray-700 font-medium mb-2'>Date</label>
      <input ref={inputRef} type="text" name = "date" value={data.date} placeholder="Enter date" className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-indigo-500 focus:outline-none transition-colors" onChange={(e) => {
        setData({...data , date : e.target.value})
      }}/>
      </div>

            <div>
            <label className='block text-gray-700 font-medium mb-2'>Time</label>
            <input  type="text" name = "time" value={data.time} placeholder="Enter time" className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-indigo-500 focus:outline-none transition-colors" onChange={(e) => {
        setData({...data , time : e.target.value})
      }} />
      </div>
      
      <div>
      <label className='block text-gray-700 font-medium mb-2'>Status</label>
      <input type="text" name = "status" value={data.status} placeholder="Enter status" className="w-full border-2 border-gray-200 rounded-lg px-4 py-3 focus:border-indigo-500 focus:outline-none transition-colors" onChange={(e) => {
        setData({...data , status : e.target.value})
      }} />
      </div>
      </div>

<button className='w-full mt-8 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-6 rounded-xl transition-colors duration-300 shadow-lg hover:shadow-xl' onClick={save}>Create Slot </button>
    </div>
    </div>
    </>
  );


}


const UpdateSlot = () => {
        const {slots , setSlots} = useContext(ContextAPI);
  
  return (
    <>
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
<button className='w-full mt-4  text-white font-bold py-3 px-4 rounded-lg transition-colors duration-300 bg-green-500 hover:bg-green-600' onClick={() => {
editform(ele);
}}
>Update Slot</button>
    </div>
    </div>
      ))
    }
  
    </>
    
  )
}

export default UpdateSlot