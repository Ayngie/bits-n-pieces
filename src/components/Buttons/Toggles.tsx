import Toggle from './Toggle';
import ToggleColored from './ToggleColored';
import ToggleTheme from './ToggleTheme';

const Toggles: React.FC = () => {
  return (
    <div className="card">
      <h3>Toggles:</h3>
      <Toggle />
      <ToggleColored />
      <ToggleTheme />
    </div>
  );
};

export default Toggles;
