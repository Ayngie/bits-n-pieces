import { ChangeEvent, useState } from 'react';
import ButtonWithProps from '../Buttons/ButtonWithProps';

const BasicInput = () => {
  const [searchText, setSearchText] = useState<string>('');
  const [boldChecked, setBoldChecked] = useState<boolean>(false);
  const [italicChecked, setItalicChecked] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const fontstyles = () => {
    return [boldChecked && 'bold', italicChecked && 'italic']
      .filter(Boolean)
      .join(' ');
  };

  return (
    <article className="bordered-section">
      <h3>Basic inputs:</h3>

      {/* Text input */}
      <fieldset className="bordered-section">
        <legend>
          <h4>Text input:</h4>
        </legend>
        <label htmlFor="searchTextInput">Input text to search:</label>{' '}
        <input
          id="searchTextInput"
          type="text"
          value={searchText}
          onChange={handleChange}
          aria-label="Search text input"
          placeholder="Write here..."
        />
        <ButtonWithProps
          buttonText="Search"
          onClickFunction={() => setSearchText(' ')}
        />
        <p>Searchtext: {searchText}</p>
      </fieldset>

      {/* Checkboxes */}
      <fieldset className="bordered-section">
        <legend>
          <h4>Checkbox input:</h4>
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

      {/* Radiobuttons */}
      <fieldset className="bordered-section">
        <legend>
          <h4>Radiobutton input:</h4>
        </legend>

        <p>Choose theme: </p>
        <div>
          <label htmlFor="light">
            <input id="light" type="radio" name="theme" value="option1" /> Light
            mode
          </label>
          <label htmlFor="dark">
            <input id="dark" type="radio" name="theme" value="option2" /> Dark
            mode
          </label>
        </div>
      </fieldset>
    </article>
  );
};

export default BasicInput;
