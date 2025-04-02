import { useState } from 'react';
import ButtonWithProps from '../Buttons/ButtonWithProps';

const InputText = () => {
  const [userInput, setUserInput] = useState<string>('');
  const [searchText, setSearchText] = useState<string>('');

  const sanitizeInput = (input: string): string =>
    input
      .replace(/<[^>]*>/g, '') // Remove HTML-tags
      .replace(/\s+/g, ' ') // Replace multiple spaces with single space
      .trim();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUserInput(e.target.value);
  };

  const handleSearch = () => {
    const sanitized = sanitizeInput(userInput);
    setSearchText(sanitized);
    setUserInput('');
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
        <div className="input-text-info italic">
          <p>User is writing: {userInput}</p>
          <p>Searchtext was: {searchText}</p>
        </div>
      </fieldset>
    </article>
  );
};

export default InputText;
