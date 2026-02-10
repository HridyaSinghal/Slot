import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { ContextAPI } from '../Context';
import { useEffect } from 'react';
import { useRef } from 'react';

const CreateSlot = () => {

const {slots, setSlots} = useContext(ContextAPI);

  const [data , setData] = useState({date:'', time:'', status:''});

    const inputRef = useRef(null);

function save() {
  if (data.date && data.time && data.status) {
    setSlots([...slots, data]);
    setData({date:'', time:'', status:''});
  }
}

useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
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
  )
}

export default CreateSlot
