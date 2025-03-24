import './App.css';
import Select from './components/Selects/Select';
import Buttons from './components/Buttons/Buttons';
import Forms from './components/Forms/Forms';
import Selects from './components/Selects/Selects';

function App() {
  return (
    <>
      <h1>Coding is fun!</h1>

      {/* TODO: Dropdown to choose what to look at */}
      <Select />
      <Buttons />
      <Forms />
      <Selects />
    </>
  );
}

export default App;
