import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Calculator from "./components/Calculator";
import QuoteDisplay from "./components/QuoteDisplay";
import Home from "./components/Home";

const App = () => (
  <Router>
    <div>
      <nav>
        <ul className="pages">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/calculator">Calculator</Link>
          </li>
          <li>
            <Link to="/quote">QuoteDisplay</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/quote" element={<QuoteDisplay />} />
      </Routes>
    </div>
  </Router>
);

export default App;
