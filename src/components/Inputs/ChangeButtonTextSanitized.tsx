import { useState } from 'react';
import ButtonWithProps from '../Buttons/ButtonWithProps';

const sanitizeInput = (input: string): string => {
  return input
    .replace(/<[^>]*>/g, '') // Remove HTML-tags
    .replace(/\s+/g, ' ') // Replace multiple spaces with single space
    .trim(); // Remove leading/trailing spaces
};

const ChangeButtonTextSanitized = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [buttonText, setButtonText] = useState<string>('Buttontext');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    const sanitizedValue = sanitizeInput(rawValue);
    setInputValue(sanitizedValue);

    if (sanitizedValue) {
      setButtonText(sanitizedValue);
    }
  };
  return (
    <article className="bordered-section">
      <h3>Change button text:</h3>
      <div>
        <label htmlFor="buttonTextInput">
          Text input:{' '}
          <input
            id="buttonTextInput"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Type here..."
            maxLength={50}
          />
        </label>
        <ButtonWithProps buttonText={buttonText} />
      </div>
    </article>
  );
};

export default ChangeButtonTextSanitized;
