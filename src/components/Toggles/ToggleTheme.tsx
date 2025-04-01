import { useState } from 'react';

const ToggleTheme = () => {
  const [dark, setDark] = useState<boolean>(true);

  return (
    <article
      className="example-section"
      id={dark ? 'chosen-dark-theme' : 'chosen-light-theme'}>
      <h2>Toggle theme between light/dark:</h2>
      <button onClick={() => setDark((prev) => !prev)}>
        {dark ? 'Dark theme' : 'Light theme'}
      </button>
    </article>
  );
};

export default ToggleTheme;
