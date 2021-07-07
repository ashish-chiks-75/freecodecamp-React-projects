import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    setText(data.slice(0, amount));
  };

  const handleCount = (e) => {
    let num = e.target.value
    if (num > 8){
      num = 8
      setCount(8)
    }
    if (num < 1){
      num = 1
      setCount(1)
    }
    setCount(num)
  }
  return (
    <section className='section-center'>
      <h3>tired of boring lorem ipsum?</h3>
      <p>Value should be between 1 and 8 (both inclusive)</p>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>paragraphs:</label>
        <input
          type='number'
          name='amount'
          id='amount'
          value={count}
          onChange={handleCount}
        />
        <button className='btn'>generate</button>
      </form>
      <article className='lorem-text'>
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;