import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ClickIncrement from "./components/ClickIncrement";
// import { UpdatedComp } from "./components/HighOrder";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <div>
        <img
          src="/Users/adrianson/reactprac/demo/src/img/homeicon.png"
          alt="home_icon"
        />
      </div>
      <header className="App-header">
        <ClickIncrement />
      </header>
    </div>
  );
}

export default App;
