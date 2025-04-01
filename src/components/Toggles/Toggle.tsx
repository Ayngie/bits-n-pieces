import { useState } from 'react';

const Toggle = () => {
  const [on, setOn] = useState<boolean>(true);

  return (
    <article className="example-container">
      <h2>Basic toggle:</h2>

      <button onClick={() => setOn(!on)}>{on ? 'ON' : 'OFF'}</button>
    </article>
  );
};

export default Toggle;
