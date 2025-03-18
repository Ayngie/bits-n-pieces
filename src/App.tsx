import './App.css';
import Counter from './components/Counter';
import Toggle from './components/Toggle';

function App() {
  return (
    <>
      <h1>Buttons:</h1>
      <div className="card">
        <Counter />
      </div>
      <div className="card">
        <Toggle />
      </div>
    </>
  );
}

export default App;
