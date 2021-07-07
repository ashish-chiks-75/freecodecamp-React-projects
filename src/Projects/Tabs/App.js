import React, { useState, useEffect } from "react";
import Jobs from "./Jobs";

const url = "https://course-api.com/react-tabs-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setJobs(data);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <section className="section loading">
        <h2>Loading...</h2>
      </section>
    );
  }

  return jobs && <Jobs jobs={jobs} value={value} setValue={setValue} />;
}

export default App;
