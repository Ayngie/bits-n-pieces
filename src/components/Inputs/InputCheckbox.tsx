import { useState } from 'react';

const InputCheckbox = () => {
  const [boldChecked, setBoldChecked] = useState<boolean>(false);
  const [italicChecked, setItalicChecked] = useState<boolean>(false);

  const fontstyles = () => {
    return [boldChecked && 'bold', italicChecked && 'italic']
      .filter(Boolean)
      .join(' ');
  };

  return (
    <article className="example-container">
      <fieldset>
        <legend>
          <h2>Checkbox input:</h2>
        </legend>

        <p className={fontstyles()}>Make my font...</p>

        <div>
          <label htmlFor="bold">
            Bold:{' '}
            <input
              id="bold"
              type="checkbox"
              name="font"
              checked={boldChecked}
              onChange={() => setBoldChecked((prev) => !prev)}></input>
          </label>
        </div>

        <div>
          <label htmlFor="italic">
            Italic:{' '}
            <input
              id="italic"
              type="checkbox"
              name="font"
              checked={italicChecked}
              onChange={() => setItalicChecked((prev) => !prev)}></input>
          </label>
        </div>
      </fieldset>
    </article>
  );
};

export default InputCheckbox;
