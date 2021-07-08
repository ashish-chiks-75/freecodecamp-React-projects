import React, { useState, useEffect } from "react";
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from "react-icons/fa";

const url = "https://randomuser.me/api/";
const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";

function App() {
  const [loading, setLoading] = useState(true);
  const [person, setPerson] = useState({});
  const [title, setTitle] = useState("name");
  const [value, setValue] = useState("Random User");

  const getPerson = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();

      const {
        phone,
        email,
        login: { password },
        name: { title, first, last },
        dob: { age },
        picture: { large },
        location: {
          street: { number, name },
        },
      } = data.results[0];

      const newPerson = {
        name: `${title} ${first} ${last}`,
        password,
        age,
        image: large,
        street: `${number} ${name}`,
        email,
        phone,
      };

      setLoading(false);
      setPerson(newPerson);
      setTitle("name");
      setValue(newPerson.name);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    getPerson();
  }, []);

  const handleValue = (e) => {
    if (e.target.classList.contains("icon")) {
      const newValue = e.target.dataset.label;
      setTitle(newValue);
      setValue(person[newValue]);
    }
  };

  return (
    <main>
      <div className="block bcg-black"></div>
      <div className="block">
        <div className="container">
          <img
            src={(person && person.image) || defaultImage}
            alt={"random user"}
            className="user-img"
          ></img>
          <p className="user-title">my {title} is</p>
          <p className="user-value">{value}</p>
          <div className="values-list">
            <button
              className="icon"
              data-label="name"
              onMouseOver={handleValue}
            >
              <FaUser></FaUser>
            </button>
            <button
              className="icon"
              data-label="email"
              onMouseOver={handleValue}
            >
              <FaEnvelopeOpen></FaEnvelopeOpen>
            </button>
            <button className="icon" data-label="age" onMouseOver={handleValue}>
              <FaCalendarTimes></FaCalendarTimes>
            </button>
            <button
              className="icon"
              data-label="street"
              onMouseOver={handleValue}
            >
              <FaMap></FaMap>
            </button>
            <button
              className="icon"
              data-label="phone"
              onMouseOver={handleValue}
            >
              <FaPhone></FaPhone>
            </button>
            <button
              className="icon"
              data-label="password"
              onMouseOver={handleValue}
            >
              <FaLock></FaLock>
            </button>
          </div>
          <button className="btn" type="button" onClick={getPerson}>
            {loading ? "loading..." : "Random user"}
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
