import Counter from './Counter';
import Toggles from '../Toggles/Toggles';

const Buttons = () => {
  return (
    <section className="card bordered-section">
      <h2>Buttons:</h2>
      <Counter />
      <Toggles />
    </section>
  );
};

export default Buttons;
