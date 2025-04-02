import { useState } from 'react';
import ButtonWithProps from '../Buttons/ButtonWithProps';

const sanitizeInput = (input: string): string => {
  return input
    .replace(/<[^>]*>/g, '') // Remove HTML-tags
    .replace(/\s+/g, ' '); // Prevent multiple spaces, replace with single space
};

const FormInputText = () => {
  const [userInput, setUserInput] = useState<string>('');
  const [formInput, setFormInput] = useState<string>('');

  //sanitize input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const rawValue = e.target.value;
    const sanitizedValue = sanitizeInput(rawValue);
    setUserInput(sanitizedValue);
    setFormInput(sanitizedValue || "You're amazing");
  };

  // prevent default form submission / page reload
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUserInput('');
  };

  return (
    <article className="example-container">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>
            <h2>Form input:</h2>
          </legend>
          <div>
            <label htmlFor="userInput">
              Input text in this form to change the text below:{' '}
            </label>
          </div>
          <input
            id="userInput"
            type="text"
            value={userInput}
            onChange={handleChange}
            placeholder="Type here..."
            maxLength={50}
          />
          <ButtonWithProps type="submit" buttonText="Update Form" />

          <p>Form says: "{formInput}"</p>
        </fieldset>
      </form>
    </article>
  );
};

export default FormInputText;
