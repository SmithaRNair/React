// src/contexts/CounterContext.js
import React, { createContext, useReducer } from 'react';

// Context creation
export const CounterContext = createContext();

// Initial state
const initialState = [];

// Reducer function to manage state transitions
const counterReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_COUNTER':
      return [...state, { id: action.id, value: 0 }];
    case 'INCREMENT_COUNTER':
      return state.map(counter =>
        counter.id === action.id ? { ...counter, value: counter.value + 1 } : counter
      );
    case 'RESET_COUNTER':
      return state.map(counter =>
        counter.id === action.id ? { ...counter, value: 0 } : counter
      );
    case 'DELETE_COUNTER':
      return state.filter(counter => counter.id !== action.id);
    default:
      return state;
  }
};

// Provider component
export const CounterProvider = ({ children }) => {
  const [counters, dispatch] = useReducer(counterReducer, initialState);

  return (
    <CounterContext.Provider value={{ counters, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};
