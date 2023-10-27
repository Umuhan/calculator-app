import React, { useState } from "react";
import calculate from "../logic/calculate";

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

  // eslint-disable-next-line
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
    <div>
      <h1 style={{ textAlign: "left" }} className="math-magic">
        Math Calculator
      </h1>
      <h4 className="heading">Lets do some math!</h4>

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
    </div>
  );
};

export default Calculator;
