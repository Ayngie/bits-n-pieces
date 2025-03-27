import { useState } from 'react';
import ButtonWithProps from '../Buttons/ButtonWithProps';

const sanitizeInput = (input: string): string => {
  return input
    .replace(/<[^>]*>/g, '') // Remove HTML-tags
    .replace(/\s+/g, ' '); // Prevent multiple spaces, replace with single space
  // .trim() // Remove leading/trailing spaces
};

const FormInput = () => {
  const [inputValue, setInputValue] = useState<string>(' ');
  const [formInput, setFormInput] = useState<string>("You're amazing");

  //sanitize input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const rawValue = e.target.value;
    const sanitizedValue = sanitizeInput(rawValue);
    setInputValue(sanitizedValue);
    setFormInput(sanitizedValue || "You're amazing");
  };

  // prevent default form submission / page reload
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <article className="bordered-section">
      <h3>Form input:</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="buttonTextInput">
            Input text in this form to change the text below:{' '}
          </label>
        </div>
        <input
          id="buttonTextInput"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type here..."
          maxLength={50}
        />

        <ButtonWithProps type="submit" buttonText="Update Form" />
        {/* Debugging: Show what the button text is */}
        <p>Form says: "{formInput}"</p>
      </form>
    </article>
  );
};

export default FormInput;
