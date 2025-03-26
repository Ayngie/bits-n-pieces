import { ChangeEvent, useState } from 'react';
import ButtonWithProps from '../Buttons/ButtonWithProps';

const BasicInput = () => {
  const [textInput, setTextInput] = useState<string>('Text...');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTextInput(e.target.value);
  };

  return (
    <article className="bordered-section">
      <h3>Basic input:</h3>

      <div>
        <div>
          <label htmlFor="buttonTextInput">
            Input text to change button text:
          </label>
        </div>
        <input
          id="buttonTextInput"
          type="text"
          value={textInput}
          onChange={handleChange}
        />

        <ButtonWithProps buttonText={textInput} />
      </div>
    </article>
  );
};

export default BasicInput;
