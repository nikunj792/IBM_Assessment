import { useState } from "react";
import "./styles.css";

export default function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [op, setOp] = useState("add");
  const [result, setResult] = useState();
  const resultCal = () => {
    let res;
    switch (op) {
      case "add":
        res = parseInt(num1) + parseInt(num2);
        setResult(res);
        // document.getElementById("result").innerHTML = res;
        break;
      case "sub":
        res = parseInt(num1) - parseInt(num2);
        setResult(res);
        // document.getElementById("result").innerHTML = res;
        break;
      case "mul":
        res = parseInt(num1) * parseInt(num2);
        setResult(res);
        // document.getElementById("result").innerHTML = res;
        break;
      default:
        break;
    }
  };

  return (
    <div className="App">
      <label for="num1">Enter Number 1</label>
      <input
        type="number"
        value={num1}
        id="num1"
        className="num1"
        onChange={(e) => setNum1(e.target.value)}
      />
      <br />
      <label for="num2">Enter Number 2</label>
      <input
        type="number"
        value={num2}
        id="num2"
        className="num2"
        onChange={(e) => setNum2(e.target.value)}
      />
      <button onClick={(e) => setOp(e.target.value)} value="add">
        Add
      </button>
      <button onClick={(e) => setOp(e.target.value)} value="sub">
        Sub
      </button>
      <button onClick={(e) => setOp(e.target.value)} value="mul">
        Mul
      </button>
      <button onClick={() => resultCal()}>=</button>
      <div id="result">{result}</div>
    </div>
  );
}
