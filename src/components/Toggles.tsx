import Toggle from './Toggles/Toggle';
import ToggleColored from './Toggles/ToggleColored';
import ToggleTheme from './Toggles/ToggleTheme';
import ToggleTwoChoices from './Toggles/ToggleTwoChoices';
import ToggleThreeChoices from './Toggles/ToggleThreeChoices';
import ToggleWithProps from './Toggles/ToggleWithProps';

const Toggles: React.FC = () => {
  return (
    <section className="card">
      <h2>Toggles:</h2>

      <Toggle />
      <ToggleColored />
      <ToggleTheme />
      <ToggleTwoChoices />
      <ToggleThreeChoices />
      {/* Wrapping here for example component, to keep component file clean */}
      <article className="bordered-section">
        <h3>Toggle with props:</h3>
        <ToggleWithProps buttonText="Buttontext goes here" />
      </article>
    </section>
  );
};

export default Toggles;
