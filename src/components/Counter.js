// src/components/Counter.js
import React, { useContext } from 'react';
import { CounterContext } from '../contexts/CounterContext';

const Counter = ({ counter, onContextMenu }) => {
  const { dispatch } = useContext(CounterContext);

  return (
    <div className="counter-box" onContextMenu={(e) => onContextMenu(e, counter.id)}>
      <div className="counter-value-box">{counter.value}</div>
      <button className="circle" onClick={() => dispatch({ type: 'INCREMENT_COUNTER', id: counter.id })}>
        +
      </button>
      <div className="increment-label">Increment</div>
    </div>
  );
};

export default Counter;
