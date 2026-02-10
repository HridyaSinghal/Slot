import { createContext, useState } from "react";

export const ContextAPI = createContext(null);

export const ContextProvider = ({ children }) => {

const [slots , setSlots] = useState([])
const [bookSlots , setBookSlots] = useState([]);
    return (
    <ContextAPI.Provider value={{ slots, setSlots , setBookSlots , bookSlots}}>
      {children}
    </ContextAPI.Provider>
  );
};