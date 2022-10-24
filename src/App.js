import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ClickIncrement from "./components/ClickIncrement";
// import { UpdatedComp } from "./components/HighOrder";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <ClickIncrement />
      </header>
    </div>
  );
}

export default App;
