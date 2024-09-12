// src/App.js
import React, { useContext } from 'react';
import { CounterProvider, CounterContext } from './contexts/CounterContext';
import CounterList from './components/CounterList';
import ContextMenu from './components/ContextMenu';
import { useContextMenu } from './hooks/useContextMenu';
import './App.css';

const App = () => {
  const { dispatch } = useContext(CounterContext);
  const { contextMenu, openContextMenu, closeContextMenu } = useContextMenu();

  const addCounter = () => {
    const id = new Date().getTime();
    dispatch({ type: 'ADD_COUNTER', id });
  };

  const handleReset = (id) => {
    dispatch({ type: 'RESET_COUNTER', id });
    closeContextMenu();
  };

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE_COUNTER', id });
    closeContextMenu();
  };

  return (
    <div className="App" onClick={closeContextMenu}>
      <button className="counter-button" onClick={addCounter}>Add Counter</button>
      <CounterList onContextMenu={openContextMenu} />
      <ContextMenu contextMenu={contextMenu} onReset={handleReset} onDelete={handleDelete} />
    </div>
  );
};

export default function AppWrapper() {
  return (
    <CounterProvider>
      <App />
    </CounterProvider>
  );
}
