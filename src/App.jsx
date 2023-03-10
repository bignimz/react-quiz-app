import { useState } from 'react';
import './App.css';

function App() {
  // Add a UseState Hook
  const [questionNumber, setQuestionNumber] = useState(1);
  const moneyList = [
    {id:1, amount:"$ 100"},
    {id:2, amount:"$ 200"},
    {id:3, amount:"$ 300"},
    {id:4, amount:"$ 500"},
    {id:5, amount:"$ 1000"},
    {id:6, amount:"$ 2000"},
    {id:7, amount:"$ 4000"},
    {id:8, amount:"$ 8000"},
    {id:9, amount:"$ 16000"},
    {id:10, amount:"$ 32000"},
    {id:11, amount:"$ 64000"},
    {id:12, amount:"$ 125000"},
    {id:13, amount:"$ 250000"},
    {id:14, amount:"$ 500000"},
    {id:15, amount:"$ 1000000"},
  ].reverse();
  return (
    <div className="app">
      <div className="main">Main</div>
      <div className="money">
        <ul className="money-list">
          {moneyList.map((m) => (
            <li className={questionNumber === m.id ? "money-item active" : "money-item"}>
              <span className="moneyListItemNumber">{m.id}</span>
              <span className="momeyListItemAmount">{m.amount}</span>
            </li>          
          ))}
        </ul>

      </div>
    </div>
  );
}

export default App;
