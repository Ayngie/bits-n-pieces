import { useState } from 'react';
import ButtonWithProps from '../Buttons/ButtonWithProps';

const FormInput = () => {
  const [buttonTextInput, setButtonTextInput] = useState<string>('Buttontext');

  //sanitize input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setButtonTextInput(e.target.value || 'Buttontext');
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
            Input text in this form to change the button text:{' '}
          </label>
        </div>
        <input
          id="buttonTextInput"
          type="text"
          onChange={handleInputChange}
          placeholder="Type here..."
          maxLength={50}
        />

        <ButtonWithProps type="submit" buttonText={buttonTextInput} />
        {/* Debugging: Show what the button text is */}
        {/* <p>Current button text: "{buttonTextInput}"</p> */}
      </form>
    </article>
  );
};

export default FormInput;
