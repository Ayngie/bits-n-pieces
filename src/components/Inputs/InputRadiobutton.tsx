const InputRadiobutton = () => {
  return (
    <article className="example-container">
      <fieldset>
        <legend>
          <h2>Radiobutton input:</h2>
        </legend>

        <p>Choose theme: </p>
        <div>
          <label htmlFor="light">
            <input id="light" type="radio" name="theme" value="option1" /> Light
            mode
          </label>
          <label htmlFor="dark">
            <input id="dark" type="radio" name="theme" value="option2" /> Dark
            mode
          </label>
        </div>
      </fieldset>
    </article>
  );
};

export default InputRadiobutton;
