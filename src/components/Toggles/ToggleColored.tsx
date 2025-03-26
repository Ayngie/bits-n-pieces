import React, { useState } from 'react';

const ToggleColored: React.FC = () => {
  const [on, setOn] = useState<boolean>(true);

  return (
    <article className="bordered-section">
      <h3>Toggle with interactive coloring:</h3>

      <button
        className={on ? 'button-on' : 'button-off'}
        onClick={() => setOn((prev) => !prev)}>
        {on ? 'ON' : 'OFF'}
      </button>
    </article>
  );
};

export default ToggleColored;
