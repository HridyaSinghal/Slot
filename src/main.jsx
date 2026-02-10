import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import AvailableSlots from './Componenets/AvailableSlots'
import BookedSlots from './Componenets/BookedSlot'
import CreateSlots from './Componenets/CreateSlot'
import UpdateSlots from './Componenets/UpdateSlot'
import { ContextProvider } from './Context.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
 <ContextProvider>
  <Routes>
    <Route path="/" element={<App />} >
    <Route path="/available-slots" element={<AvailableSlots />} />
    <Route path="/booked-slots" element={<BookedSlots />} />
    <Route path="/create-slots" element={<CreateSlots />} />
    <Route path="/update-slots" element={<UpdateSlots />} />  
    </Route>
  </Routes>
  </ContextProvider>
  
  </BrowserRouter>,
)
