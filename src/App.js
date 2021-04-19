// import logo from "./logo.svg";
import "./App.css";
import Calculator from "./Calculator";

function handleChange(e) {
  console.log(e.target.value);
}

function App() {
  return (
    <div className="App">
      <h1>Enter each number in the array, separated by a ','</h1>
      <Calculator />
      <input name="firstName" onChange={handleChange} />
    </div>
  );
}

export default App;
