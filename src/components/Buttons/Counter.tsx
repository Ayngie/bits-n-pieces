import React, { useState } from 'react';

const Counter: React.FC = () => {
  // explicitly defines this as a functional component.
  const [count, setCount] = useState<number>(0);

  return (
    <div className="card">
      <h3>Counter:</h3>
      <p>Count is: {count}</p>

      {/* Increment count: */}
      <button
        className={count > 0 ? 'button-on' : ''}
        onClick={() => setCount((count) => count + 1)}>
        + Increment count: {count}
      </button>

      <button
        className={count < 0 ? 'button-on' : ''}
        onClick={() => setCount((count) => count - 1)}>
        - Decrement count: {count}
      </button>

      <button onClick={() => setCount(0)}>Reset count</button>
    </div>
  );
};

export default Counter;
