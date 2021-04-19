import logo from "./logo.svg";
import Calculate from './Calculate.js'
import "./App.css";

function App() {
  return (
    <>
    <h1>Enter each number in the array, seperated by a ','</h1>
    <select >
      <option id='sum'>Sum</option>
      <option id='average'>Average</option>
      <option id='Mode'>Mode</option>
    </select>
    <Calculate/>

    </>
  );
}

export default App;
