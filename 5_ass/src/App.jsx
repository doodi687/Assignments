

import { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleOperation = (operation) => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);


    if (isNaN(number1) || isNaN(number2)) {
      setError('Please enter valid numbers');
      setResult(null);
      return;
    }

    setError('');
    let calcResult;
    switch (operation) {
      case 'add':
        calcResult = number1 + number2;
        break;
      case 'subtract':
        calcResult = number1 - number2;
        break;
      case 'multiply':
        calcResult = number1 * number2;
        break;
      case 'divide':
        if (number2 === 0) {
          setError('Cannot divide by zero');
          setResult(null);
          return;
        }
        calcResult = number1 / number2;
        break;
      default:
        return;
    }
    setResult(calcResult);
  };

  return (
    <div className="calculator">
      <h1>Simple Calculator</h1>
      <div className="input-group">
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="Enter first number"
          className="input-field"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Enter second number"
          className="input-field"
        />
      </div>
      <div className="button-group">
        <button onClick={() => handleOperation('add')}>+</button>
        <button onClick={() => handleOperation('subtract')}>-</button>
        <button onClick={() => handleOperation('multiply')}>×</button>
        <button onClick={() => handleOperation('divide')}>÷</button>
      </div>
      {error && <div className="error">{error}</div>}
      {result !== null && !error && (
        <div className="result">Result: {result}</div>
      )}
    </div>
  );
}

export default App;
