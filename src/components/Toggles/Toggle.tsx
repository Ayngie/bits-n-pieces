import React, { useState } from 'react';

const Toggle: React.FC = () => {
  // explicitly defines this as a functional component.
  const [on, setOn] = useState<boolean>(true);

  return (
    <div>
      <h3>Basic toggle</h3>

      <button onClick={() => setOn(!on)}>{on ? 'ON' : 'OFF'}</button>
    </div>
  );
};

export default Toggle;
