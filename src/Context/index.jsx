import React, { createContext, useState, useEffect } from 'react';

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const [todos, setTodos] = useState([]);
  const [currentFilter, setCurrentFilter] = useState('all'); // possible values: all, active, completed

  useEffect(() => {
    const todosFromLocalStorage = JSON.parse(localStorage.getItem('todos'));
    if (todosFromLocalStorage) {
      setTodos(todosFromLocalStorage);
    }
  }, []);
  
  const addTodostoLocalStorage = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  useEffect(() => {
    if (todos.length > 0) {
      addTodostoLocalStorage();
    }
  }, [todos]);

  const contextValues= {
    theme,
    toggleTheme,
    todos,
    setTodos,
    currentFilter,
    setCurrentFilter,
    addTodostoLocalStorage
  };

  return (
    <Context.Provider value={contextValues}>
      {children}
    </Context.Provider>
  );
};