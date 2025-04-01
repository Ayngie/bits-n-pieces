import { ChangeEvent, useState } from 'react';
import ButtonWithProps from '../Buttons/ButtonWithProps';

const InputText = () => {
  const [searchText, setSearchText] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <section className="example-section">
      <fieldset>
        <legend>
          <h4>Text input:</h4>
        </legend>
        {/* N.B. As we have no form-element here, button will not 'Click' on key-down = 'Enter'. */}
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
          onClickFunction={() => console.log('Search text was: ', searchText)}
        />
        <p>Searchtext: {searchText}</p>
      </fieldset>
    </section>
  );
};

export default InputText;
