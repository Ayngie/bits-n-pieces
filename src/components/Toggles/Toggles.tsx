import Toggle from './Toggle';
import ToggleColored from './ToggleColored';
import ToggleTheme from './ToggleTheme';

const Toggles: React.FC = () => {
  return (
    <div className="card bordered-section">
      <h3>Toggles:</h3>
      <Toggle />
      <ToggleColored />
      <ToggleTheme />
      {/* TODO: incorporate the rest? */}
    </div>
  );
};

export default Toggles;
