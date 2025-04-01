import Buttons from './components/Buttons';
import DynamicComponentMapping from './components/DynamicComponentMapping';
import Inputs from './components/Inputs';
import Forms from './components/Forms';
import Selects from './components/Selects';
import Toggles from './components/Toggles';
import './App.css';

function App() {
  return (
    <article>
      <h1>Coding is fun!</h1>
      <Buttons />
      <DynamicComponentMapping />
      <Inputs />
      <Forms />
      <Selects />
      <Toggles />
    </article>
  );
}

export default App;
