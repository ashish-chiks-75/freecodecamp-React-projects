import React from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  return (
    <section className="container">
      <h3>FAQs</h3>
      <div className="info">
        {data.map((ques) => {
          return <SingleQuestion key={ques.id} {...ques} />;
        })}
      </div>
    </section>
  );
}

export default App;
