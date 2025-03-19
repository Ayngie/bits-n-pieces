import React, { useState } from 'react';

const Toggle: React.FC = () => {
  // explicitly defines this as a functional component.
  const [on, setOn] = useState<boolean>(true);

  return (
    <div className="card">
      <h2>Toggle:</h2>
      <button onClick={() => setOn(!on)}>{on ? 'ON' : 'OFF'}</button>
    </div>
  );
};

export default Toggle;
