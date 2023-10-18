import React, { useState } from "react";
import calculate from "../logic/calculate";
import "../styles.css";

const Calculator = () => {
  const [count, setCount] = useState({
    total: 0,
    operation: null,
    next: null,
  });

  const clickHandler = (button) => {
    const output = calculate(count, button);
    setCount(output);
  };

  const Button = ({ label, className }) => (
    <button
      type="button"
      onClick={() => clickHandler(label)}
      className={className}
    >
      {label}
    </button>
  );

  return (
    <main className="container">
      <section className="calculator">
        <header className="header calc">
          {count.total} {count.operation} {count.next}
        </header>
        <Button label="AC" />
        <Button label="+/-" />
        <Button label="%" />
        <Button label="÷" className="color" />
        <Button label="7" />
        <Button label="8" />
        <Button label="9" />
        <Button label="x" className="color" />
        <Button label="4" />
        <Button label="5" />
        <Button label="6" />
        <Button label="-" className="color" />
        <Button label="1" />
        <Button label="2" />
        <Button label="3" />
        <Button label="+" className="color" />
        <Button label="0" className="zero" />
        <Button label="." />
        <Button label="=" className="btn color" />
      </section>
    </main>
  );
};

export default Calculator;
