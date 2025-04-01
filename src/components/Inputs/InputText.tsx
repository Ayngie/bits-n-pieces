import { ChangeEvent, useState } from 'react';
import ButtonWithProps from '../Buttons/ButtonWithProps';

const InputText = () => {
  const [searchInput, setSearchInput] = useState<string>('');
  const [searchText, setSearchText] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const searchForResults = () => {
    console.log('Search text was: ', searchInput);
    setSearchText(searchInput);
    setSearchInput('');
    console.log('Searching for: ', searchText);
  };

  return (
    <article className="example-container">
      <fieldset>
        <legend>
          <h2>Text input:</h2>
        </legend>
        {/* N.B. As we have no form-element here, button will not 'Click' on key-down = 'Enter'. */}
        <label htmlFor="searchTextInput">Input text to search:</label>{' '}
        <input
          id="searchTextInput"
          type="text"
          value={searchInput}
          onChange={handleChange}
          aria-label="Search text input"
          placeholder="Write here..."
        />
        <ButtonWithProps
          buttonText="Search"
          onClickFunction={searchForResults}
        />
        <p>Searchtext: {searchText}</p>
      </fieldset>
    </article>
  );
};

export default InputText;
