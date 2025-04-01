import { useId } from 'react';

const SelectsMultiple = () => {
  const colorSelectId = useId();
  return (
    <article className="bordered-section">
      <h2>Multiple selects:</h2>

      <label>
        Pick a shape:{' '}
        <select name="selectedShape">
          <option value="heart">Heart</option>
          <option value="round">Round</option>
          <option value="square">Square</option>
        </select>
      </label>
      <hr />
      <label htmlFor={colorSelectId}>Pick a color:</label>
      <select name="selectedColor" id={colorSelectId}>
        <option value="pink">Pink</option>
        <option value="orange">Orange</option>
        <option value="blue">Blue</option>
      </select>
    </article>
  );
};

export default SelectsMultiple;
