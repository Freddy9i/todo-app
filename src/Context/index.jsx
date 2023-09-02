import React, { createContext, useState } from 'react';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const [todos, setTodos] = useState([]);
  const [currentFilter, setCurrentFilter] = useState('all'); // possible values: all, active, completed

  const contextValues= {
    theme,
    toggleTheme,
    todos,
    setTodos,
    currentFilter,
    setCurrentFilter
  };

  return (
    <Context.Provider value={contextValues}>
      {children}
    </Context.Provider>
  );
};