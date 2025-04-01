import Toggle from './Toggles/Toggle';
import ToggleColored from './Toggles/ToggleColored';
import ToggleTheme from './Toggles/ToggleTheme';
import ToggleTwoChoices from './Toggles/ToggleTwoChoices';
import ToggleThreeChoices from './Toggles/ToggleThreeChoices';

const Toggles: React.FC = () => {
  return (
    <section className="component-container">
      <h1>Toggles:</h1>

      <Toggle />
      <ToggleColored />
      <ToggleTheme />
      <ToggleTwoChoices />
      <ToggleThreeChoices />
    </section>
  );
};

export default Toggles;
