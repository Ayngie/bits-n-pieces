import React, { useState } from 'react';

const Counter: React.FC = () => {
  // explicitly defines this as a functional component.
  const [count, setCount] = useState<number>(0);

  return (
    <div className="card">
      <h2>Counter:</h2>

      <button onClick={() => setCount((count) => count + 1)}>
        Count is {count}
      </button>

      <button onClick={() => setCount(0)}>Reset count</button>
    </div>
  );
};

export default Counter;
