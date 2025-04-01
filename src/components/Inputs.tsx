import InputText from './Inputs/InputText';
import InputCheckbox from './Inputs/InputCheckbox';
import InputRadiobutton from './Inputs/InputRadiobutton';

const Inputs = () => {
  return (
    <section className="component-container">
      <h1>Inputs:</h1>
      <InputText />
      <InputCheckbox />
      <InputRadiobutton />
    </section>
  );
};

export default Inputs;
