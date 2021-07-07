import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [colour, setColour] = useState("");
  const [div, setDiv] = useState(10);
  const [colError, setColError] = useState(false);
  const [list, setList] = useState(new Values("#f15025").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colours = new Values(colour).all(div);
      setColError(false);
      setList(colours);
    } catch {
      setColError(true);
    }
  };

  const handleDiv = (e) => {
    let newDiv = e.target.value;
    if (!newDiv) {
      setDiv("");
      return;
    }
    newDiv = parseInt(newDiv);
    if (newDiv > 10) {
      newDiv = 10;
    }
    if (newDiv < 1) {
      newDiv = 1;
    }
    setDiv(newDiv);
  };

  return (
    <main>
      <section className="container">
        <h3>Colour Generator</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="colour">Colour Code: </label>
          <input
            type="text"
            value={colour}
            id="colour"
            name="colour"
            onChange={(e) => setColour(e.target.value)}
            placeholder="#f15025"
            className={`${colError ? "error" : null}`}
          ></input>
          <label htmlFor="div">Div Factor: </label>
          <input
            type="number"
            value={div}
            id="div"
            name="divr"
            onChange={handleDiv}
            placeholder="10"
          ></input>
          <button className="btn" type="submit">
            Show Colours
          </button>
        </form>
      </section>
      <section className="colours">
        {list.map((item, index) => {
          return (
            <SingleColor
              key={index}
              {...item}
              index={index}
              half={Number(list.length / 2)}
            ></SingleColor>
          );
        })}
      </section>
    </main>
  );
}

export default App;
