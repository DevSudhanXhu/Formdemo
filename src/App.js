import logo from "./logo.svg";
import "./App.css";
import ParentComponent from "./Compornents/ParentComponent";
import ChildComponent from "./Compornents/ChildComponent";
import Forms from "./Compornents/Forms";

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" />
      <ParentComponent></ParentComponent>
      <Forms></Forms>
    </div>
  );
}

export default App;
