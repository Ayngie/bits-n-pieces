import Toggle from './Toggles/Toggle';
import ToggleColored from './Toggles/ToggleColored';
import ToggleTheme from './Toggles/ToggleTheme';

const Toggles: React.FC = () => {
  return (
    <div className="card bordered-section">
      <h3>Toggles:</h3>
      <Toggle />
      <ToggleColored />
      <ToggleTheme />
      {/* TODO: incorporate the rest? */}
      {/* <ToggleTwoChoices />
      <ToggleThreeChoices /> */}
    </div>
  );
};

export default Toggles;
