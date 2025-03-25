const Select = () => {
  //TODO: fix styling!
  return (
    <label>
      Choose a subject:{' '}
      <select name="selectedSubject">
        <option value="buttons">Buttons</option>
        <option value="forms">Forms</option>
      </select>
    </label>
  );
};

export default Select;
