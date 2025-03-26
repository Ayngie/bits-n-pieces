import Toggle from './Toggles/Toggle';
import ToggleColored from './Toggles/ToggleColored';
import ToggleTheme from './Toggles/ToggleTheme';
import ToggleTwoChoices from './Toggles/ToggleTwoChoices';
import ToggleThreeChoices from './Toggles/ToggleThreeChoices';
import ToggleWithProps from './Toggles/ToggleWithProps';

const Toggles: React.FC = () => {
  return (
    <div className="card bordered-section">
      <h3>Toggles:</h3>

      <Toggle />
      <ToggleColored />
      <ToggleTheme />
      <ToggleTwoChoices />
      <ToggleThreeChoices />
      <ToggleWithProps buttonText="Buttontext goes here" />
    </div>
  );
};

export default Toggles;
