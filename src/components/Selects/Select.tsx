const Select = () => {
  return (
    <article className="example-section">
      <h2>Single select:</h2>

      <label>
        Choose a subject:{' '}
        <select name="selectedSubject">
          <option value="buttons">Buttons</option>
          <option value="forms">Forms</option>
        </select>
      </label>
    </article>
  );
};

export default Select;
