import Calculations from "./Components/Calculations"
import "./App.css";

function App() {
  return (
    <div className="App">
     <section id="calculation">
       <h1>Enter each number in the array, separated by a ','</h1>
        <Calculations/>
     </section>
    </div>
  );
}

export default App;
