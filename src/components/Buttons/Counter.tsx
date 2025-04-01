import React, { useState } from 'react';

const Counter: React.FC = () => {
  // explicitly defines this as a functional component.
  const [count, setCount] = useState<number>(0);

  return (
    <article className="bordered-section">
      <h2>Counter:</h2>
      <p>Count is: {count}</p>

      {/* Increment count: */}
      <button
        className={count > 0 ? 'button-on' : ''}
        onClick={() => setCount((count) => count + 1)}>
        + Increment count: {count}
      </button>

      {/* Decrement count: */}
      <button
        className={count < 0 ? 'button-on' : ''}
        onClick={() => setCount((count) => count - 1)}>
        - Decrement count: {count}
      </button>

      {/* Reset count: */}
      <button onClick={() => setCount(0)}>Reset count</button>
    </article>
  );
};

export default Counter;
