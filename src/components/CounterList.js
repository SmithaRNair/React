// src/components/CounterList.js
import React, { useContext } from 'react';
import { CounterContext } from '../contexts/CounterContext';
import Counter from './Counter';

const CounterList = ({ onContextMenu }) => {
  const { counters } = useContext(CounterContext);

  return (
    <div className="counter-container">
      {counters.map(counter => (
        <Counter key={counter.id} counter={counter} onContextMenu={onContextMenu} />
      ))}
    </div>
  );
};

export default CounterList;
