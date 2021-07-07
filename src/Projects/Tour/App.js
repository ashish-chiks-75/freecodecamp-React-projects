import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (response.status > 300) {
        setLoading(false);
        setError(true);
      } else {
        setLoading(false);
        setError(false);
        setTours(data);
      }
    } catch (err) {
      setLoading(false);
      setError(true);
    }
  };

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => {
      return tour.id !== id;
    });
    setTours(newTours);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (error) {
    return (
      <main>
        <div className="loading">
          <h1>Some Error Occured</h1>
        </div>
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2> No tours left </h2>
          <button
            onClick={() => {
              fetchTours();
            }}
            className="btn"
          >
            Refresh tours
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>{tours && <Tours tours={tours} removeTour={removeTour} />}</main>
  );
}

export default App;
