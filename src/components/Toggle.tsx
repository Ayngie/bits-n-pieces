import React, { useState } from 'react';

const Toggle: React.FC = () => {
  // explicitly defines this as a functional component.
  const [on, setOn] = useState<boolean>(true);

  return (
    <>
      <h3>Basic toggle</h3>

      <button onClick={() => setOn(!on)}>{on ? 'ON' : 'OFF'}</button>
    </>
  );
};

export default Toggle;
