import logo from "./logo.svg";
import "./App.css";
import Example from "./Menu";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="font-press-start">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="font-koho"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="flex flex-row-reverse mr-10">
        <Example />
      </div>
    </div>
  );
}

export default App;
