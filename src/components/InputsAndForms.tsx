import AddNumbers from './InputsAndForms/AddNumbers';
import BasicInput from './InputsAndForms/BasicInput';
import FormInput from './InputsAndForms/FormInput';

const InputsAndForms = () => {
  return (
    <section className="card">
      <h2>Inputs & Forms:</h2>

      <AddNumbers />
      <BasicInput />
      <FormInput />
    </section>
  );
};

export default InputsAndForms;
