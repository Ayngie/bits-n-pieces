import AddNumbers from './Inputs/AddNumbers';
import ChangeButtonTextSanitized from './Inputs/ChangeButtonTextSanitized';

const Inputs = () => {
  return (
    <section className="card">
      <h2>Forms:</h2>

      <AddNumbers />
      <ChangeButtonTextSanitized />
    </section>
  );
};

export default Inputs;
