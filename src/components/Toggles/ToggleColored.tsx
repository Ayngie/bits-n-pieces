import { useState } from 'react';

const ToggleColored = () => {
  const [on, setOn] = useState<boolean>(true);

  return (
    <article className="example-container">
      <h2>Toggle with interactive coloring:</h2>

      <button
        className={on ? 'button-on' : 'button-off'}
        onClick={() => setOn((prev) => !prev)}>
        {on ? 'ON' : 'OFF'}
      </button>
    </article>
  );
};

export default ToggleColored;
