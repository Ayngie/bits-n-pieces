const InputRadiobutton = () => {
  return (
    <section className="bordered-section">
      <fieldset>
        <legend>
          <h4>Radiobutton input:</h4>
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
    </section>
  );
};

export default InputRadiobutton;
