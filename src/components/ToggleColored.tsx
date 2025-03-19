import React, { useState } from 'react';

const ToggleColored: React.FC = () => {
  const [on, setOn] = useState<boolean>(true);

  return (
    <>
      <h3>Toggle with interactive coloring:</h3>

      <button
        className={on ? 'button-on' : 'button-off'}
        onClick={() => setOn((prev) => !prev)}>
        {on ? 'ON' : 'OFF'}
      </button>
    </>
  );
};

export default ToggleColored;
