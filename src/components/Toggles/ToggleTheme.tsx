import { useState } from 'react';

const ToggleTheme = () => {
  const [dark, setDark] = useState<boolean>(true);

  return (
    <article
      className={`example-container ${dark ? 'dark-mode' : 'light-mode'}`}>
      <h2>Toggle theme between light/dark:</h2>
      <button onClick={() => setDark((prev) => !prev)}>
        {dark ? 'Dark theme' : 'Light theme'}
      </button>
    </article>
  );
};

export default ToggleTheme;
