import ButtonWithProps from './Buttons/ButtonWithProps';
import Counter from './Buttons/Counter';

const Buttons = () => {
  return (
    <section className="card">
      <h2>Buttons:</h2>

      <Counter />

      {/* Wrapping here for example component, to keep component file clean */}
      <article className="bordered-section">
        <h3>Button with props:</h3>
        <ButtonWithProps buttonText="Buttontext goes here" />
      </article>
    </section>
  );
};

export default Buttons;
