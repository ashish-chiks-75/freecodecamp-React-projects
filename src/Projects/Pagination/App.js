import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import Follower from "./Follower";

const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

function App() {
  const { loading, list } = useFetch(url);
  const [index, setIndex] = useState(0);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if (loading) return;
    setFollowers(list[index]);
  }, [loading, list, index]);

  return (
    <main>
      <div className="section-title">
        <h1>{loading ? "loading..." : "pagination"}</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {followers.map((follower) => {
            return <Follower key={follower.id} {...follower}></Follower>;
          })}
        </div>
        {!loading && (
          <div className="btn-container">
            <button
              className="prev-btn"
              onClick={() => {
                const newIndex = index - 1;
                if (newIndex === -1) setIndex(list.length - 1);
                else setIndex(newIndex);
              }}
            >
              Prev
            </button>
            {list.map((_, ind) => {
              return (
                <button
                  key={ind}
                  className={`page-btn ${ind === index ? "active-btn" : null}`}
                  onClick={() => setIndex(ind)}
                >
                  {ind + 1}
                </button>
              );
            })}
            <button
              className="next-btn"
              onClick={() => {
                const newIndex = index + 1;
                if (newIndex === list.length) setIndex(0);
                else setIndex(newIndex);
              }}
            >
              Next
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
