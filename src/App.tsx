import Buttons from './components/Buttons';
import DynamicComponentMapping from './components/DynamicComponentMapping';
import Inputs from './components/Inputs';
import Selects from './components/Selects';
import Toggles from './components/Toggles';
import './App.css';

function App() {
  return (
    <>
      <h1>Coding is fun!</h1>
      <Buttons />
      <DynamicComponentMapping />
      <Inputs />
      <Selects />
      <Toggles />
    </>
  );
}

export default App;
