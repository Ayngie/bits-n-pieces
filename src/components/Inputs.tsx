import AddNumbers from './Inputs/AddNumbers';
import ChangeButtonTextBasic from './Inputs/ChangeButtonTextBasic';
import ChangeButtonTextSanitized from './Inputs/ChangeButtonTextSanitized';

const Inputs = () => {
  return (
    <section className="card">
      <h2>Forms:</h2>

      <AddNumbers />
      <ChangeButtonTextBasic />
      <ChangeButtonTextSanitized />
    </section>
  );
};

export default Inputs;
