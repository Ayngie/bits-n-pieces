import Toggle from './Toggle';
import ToggleColored from './ToggleColored';

const Toggles: React.FC = () => {
  return (
    <div className="card">
      <h2>Toggles:</h2>
      <Toggle />
      <ToggleColored />
    </div>
  );
};

export default Toggles;
