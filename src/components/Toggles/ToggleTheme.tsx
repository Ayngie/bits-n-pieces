import { useState } from 'react';

const ToggleTheme: React.FC = () => {
  const [dark, setDark] = useState<boolean>(true);

  return (
    <article
      className="bordered-section"
      id={dark ? 'chosen-dark-theme' : 'chosen-light-theme'}>
      <h3>Toggle theme between light/dark:</h3>
      <button onClick={() => setDark((prev) => !prev)}>
        {dark ? 'Dark theme' : 'Light theme'}
      </button>
    </article>
  );
};

export default ToggleTheme;
