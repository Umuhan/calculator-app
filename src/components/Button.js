const Button = () => (
  <>
    <header className="header">
      <div className="calc">0</div>
    </header>
    <button className="btn" type="button">
      Ac
    </button>
    <button type="button">+/-</button>
    <button type="button">%</button>
    <button type="button" className="color">
      <span>÷</span>
    </button>
    <button type="button">7</button>
    <button type="button">8</button>
    <button type="button">9</button>
    <button type="button" className="color">
      <span>x</span>
    </button>
    <button type="button">4</button>
    <button type="button">5</button>
    <button type="button">6</button>
    <button type="button" className="color">
      -
    </button>
    <button type="button">1</button>
    <button type="button">2</button>
    <button type="button">3</button>
    <button type="button" className="color">
      +
    </button>
    <button type="button" className="zero">
      0
    </button>
    <button type="button">.</button>
    <button className="btn color" type="button">
      =
    </button>
  </>
);

export default Button;
