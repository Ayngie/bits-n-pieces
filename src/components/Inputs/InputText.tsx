import { useState } from 'react';
import ButtonWithProps from '../Buttons/ButtonWithProps';

const InputText = () => {
  const [userInput, setUserInput] = useState<string>('');
  const [searchText, setSearchText] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleSearch = () => {
    console.log('Search text was: ', userInput);
    setSearchText(userInput);
    setUserInput('');
    console.log('Searching for: ', searchText);
  };

  return (
    <article className="example-container">
      <fieldset>
        <legend>
          <h2>Text input:</h2>
        </legend>
        {/* N.B. As we have no form-element here, button will not 'Click' on key-down = 'Enter'. */}
        <label htmlFor="userInput">Input text to search:</label>{' '}
        <input
          id="userInput"
          type="text"
          value={userInput}
          onChange={handleChange}
          aria-label="Search text input"
          placeholder="Write here..."
        />
        <ButtonWithProps buttonText="Search" onClickFunction={handleSearch} />
        <p className="input-text-info italic">Search text was: {searchText}</p>
      </fieldset>
    </article>
  );
};

export default InputText;
