import InputText from './Inputs/InputText';
import InputCheckbox from './Inputs/InputCheckbox';
import InputRadiobutton from './Inputs/InputRadiobutton';

const Inputs = () => {
  return (
    <section className="component-container">
      <h1>Inputs:</h1>

      {/* Text input */}
      <InputText />

      {/* Checkboxes */}
      <InputCheckbox />

      {/* Radiobuttons */}
      <InputRadiobutton />
    </section>
  );
};

export default Inputs;
