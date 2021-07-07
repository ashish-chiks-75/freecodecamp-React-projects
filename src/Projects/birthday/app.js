import React, { useState } from "react";
import persons from "./birthday/data";
import List from "./birthday/list";
function App() {
  const [people, setPeople] = useState(persons);
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List persons={people} />
        <button
          className="btn"
          onClick={() => {
            setPeople([]);
          }}
        >
          Clear All
        </button>
      </section>
    </main>
  );
}

export default App;
