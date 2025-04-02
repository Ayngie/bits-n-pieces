import { useState } from 'react';
import ButtonWithProps from '../Buttons/ButtonWithProps';

const FormInputText = () => {
  const [userInput, setUserInput] = useState<string>('');
  const [submittedFormInput, setSubmittedFormInput] = useState<string>('');

  const sanitizeInput = (input: string): string =>
    input
      .replace(/<[^>]*>/g, '') // Remove HTML-tags
      .replace(/\s+/g, ' ') // Replace multiple spaces with single space
      .trim();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const sanitized = sanitizeInput(userInput);
    setSubmittedFormInput(sanitized);
    setUserInput('');
  };

  return (
    <article className="example-container">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>
            <h2>Form input:</h2>
          </legend>
          <label htmlFor="userInput">Update form with your input: </label>

          <input
            id="userInput"
            type="text"
            value={userInput}
            onChange={handleChange}
            placeholder=" Type here..."
            maxLength={50}
          />
          <ButtonWithProps type="submit" buttonText="Update form" />
          <div className="input-text-info italic">
            <p>User is writing: {userInput}</p>
            <p>Submitted text: {submittedFormInput}</p>
          </div>
        </fieldset>
      </form>
    </article>
  );
};

export default FormInputText;
