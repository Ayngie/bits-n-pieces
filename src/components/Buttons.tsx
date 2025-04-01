import ButtonWithProps from './Buttons/ButtonWithProps';
import Counter from './Buttons/Counter';

const Buttons = () => {
  return (
    <section className="component-container">
      <h1>Buttons:</h1>
      {/* No wrapping for the first component: */}
      <Counter />

      {/* Wrapping second component 'ButtonWithProps' - for this example component only (to keep component file clean) */}
      <article className="bordered-section">
        <h2>Button with props:</h2>
        <ButtonWithProps buttonText="Buttontext goes here" />
      </article>
    </section>
  );
};

export default Buttons;
