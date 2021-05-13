import './App.css';
import Welcome from './Welcome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Welcome name="Newton"></Welcome>
        <Welcome name="Abhishek"></Welcome>
        <Welcome name="Siddhesh"></Welcome>
      </header>
    </div>
  );
}

export default App;
