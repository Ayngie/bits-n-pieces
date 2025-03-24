import './App.css';
import Select from './components/Selects/Select';
import Buttons from './components/Buttons/Buttons';
import Forms from './components/Forms/Forms';

function App() {
  return (
    <>
      <h1>Coding is fun!</h1>

      {/* TODO: Dropdown to choose what to look at */}
      <Select />
      <Buttons />
      <Forms />
    </>
  );
}

export default App;
