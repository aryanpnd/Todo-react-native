import React, { createContext, useState } from 'react';

const MyContext = createContext();

const MyProvider = ({ children }) => {
    const [todos, setTodos] = useState([])
    const [markedTodos, setMarkedTodos] = useState([])



  return (
    <MyContext.Provider value={{ todos,setTodos,markedTodos, setMarkedTodos}}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };