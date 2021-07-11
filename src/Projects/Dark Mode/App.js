import React, { useState, useEffect } from "react";
import data from "./data";
import Article from "./Article";

const getThemeFromStorage = () => {
  const theme = localStorage.getItem("theme");
  if (theme) return theme;
  return "light";
};

function App() {
  const [theme, setTheme] = useState(getThemeFromStorage());

  const toggleTheme = () => {
    if (theme === "light") setTheme("dark");
    else setTheme("light");
  };

  useEffect(() => {
    document.documentElement.className = `${theme}-theme`;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>{theme === "light" ? "light" : "Dark"} Mode</h1>
          <button className="btn" onClick={toggleTheme}>
            {theme === "light" ? "dark theme" : "light-theme"}
          </button>
        </div>
      </nav>
      <section className="articles">
        {data.map((article) => {
          return <Article key={article.id} {...article}></Article>;
        })}
      </section>
    </main>
  );
}

export default App;
