import React, { useState } from 'react';
import calculate from '../logic/calculate';
import '../styles.css';

function Calculator() {
  const [count, setCount] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const clickHandler = (button) => {
    const output = calculate(count, button);
    setCount(output);
  };

  return (
    <main className="container">
      <section className="calculator">
        <header className="header">
          {count.total}
          {' '}
          {count.next}
          {' '}
          {count.operation}
        </header>
        <button
          className="btn"
          type="button"
          onClick={() => clickHandler('AC')}
        >
          Ac
        </button>
        <button type="button" onClick={() => clickHandler(' +/-')}>
          +/-
        </button>
        <button type="button" onClick={() => clickHandler('%')}>
          %
        </button>
        <button
          type="button"
          className="color"
          onClick={() => clickHandler('÷')}
        >
          ÷
        </button>
        <button type="button" onClick={() => clickHandler('7')}>
          7
        </button>
        <button type="button" onClick={() => clickHandler('8')}>
          8
        </button>
        <button type="button" onClick={() => clickHandler('9')}>
          9
        </button>
        <button
          type="button"
          className="color"
          onClick={() => clickHandler('x')}
        >
          x
        </button>
        <button type="button" onClick={() => clickHandler('4')}>
          4
        </button>
        <button type="button" onClick={() => clickHandler('5')}>
          5
        </button>
        <button type="button" onClick={() => clickHandler('6')}>
          6
        </button>
        <button
          type="button"
          className="color"
          onClick={() => clickHandler('-')}
        >
          -
        </button>
        <button type="button" onClick={() => clickHandler('1')}>
          1
        </button>
        <button type="button" onClick={() => clickHandler('2')}>
          2
        </button>
        <button type="button" onClick={() => clickHandler('3')}>
          3
        </button>
        <button
          type="button"
          className="color"
          onClick={() => clickHandler('+')}
        >
          +
        </button>
        <button
          type="button"
          className="zero"
          onClick={() => clickHandler('0')}
        >
          0
        </button>
        <button type="button" onClick={() => clickHandler('.')}>
          .
        </button>
        <button
          className="btn color"
          type="button"
          onClick={() => clickHandler('=')}
        >
          =
        </button>
      </section>
    </main>
  );
}

export default Calculator;
