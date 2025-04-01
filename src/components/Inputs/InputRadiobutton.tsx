import { useState } from 'react';

const InputRadiobutton = () => {
  const [theme, setTheme] = useState<string>('');

  return (
    <article className={`example-container ${theme}`}>
      <fieldset>
        <legend>
          <h2>Radiobutton input:</h2>
        </legend>

        <h3>Choose theme: </h3>
        <div>
          <label htmlFor="light">
            <input
              id="light"
              type="radio"
              name="theme"
              value="light-mode"
              checked={theme === 'light-mode'}
              onChange={(e) => setTheme(e.target.value)}
            />{' '}
            Light mode
          </label>

          <label htmlFor="dark">
            <input
              id="dark"
              type="radio"
              name="theme"
              value="dark-mode"
              checked={theme === 'dark-mode'}
              onChange={(e) => setTheme(e.target.value)}
            />{' '}
            Dark mode
          </label>

          <label htmlFor="none">
            <input
              id="none"
              type="radio"
              name="theme"
              value=""
              checked={theme === ''}
              onChange={(e) => setTheme(e.target.value)}
            />{' '}
            None
          </label>
        </div>
      </fieldset>
    </article>
  );
};

export default InputRadiobutton;
