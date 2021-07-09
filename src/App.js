import React, { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import Photo from "./Photo";

const key = process.env.REACT_APP_ACCESS_KEY;
const mainUrl = `https://api.unsplash.com/photos/?client_id=${key}`;
const searchUrl = `https://api.unsplash.com/search/photos/?client_id=${key}&query=`;

function App() {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const searchRef = useRef(null);
  const [last, setLast] = useState(true);

  const fetchImages = async () => {
    setLoading(true);
    const url = `${mainUrl}&page=${page}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setPhotos((oldData) => [...oldData, ...data]);
      setLast(true);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const searchImages = async () => {
    setLoading(true);
    const url = `${searchUrl}${searchRef.current.value}&page=${page}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (page >= 2) setPhotos((oldData) => [...oldData, ...data["results"]]);
      else setPhotos(data["results"]);
      setLast(false);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (last) fetchImages();
    else searchImages();
    // eslint-disable-next-line
  }, [page]);

  useEffect(() => {
    const event = window.addEventListener("scroll", () => {
      if (
        !loading &&
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 100
      ) {
        setPage((page) => page + 1);
      }
    });
    return () => window.removeEventListener("scroll", event);
    // eslint-disable-next-line
  }, []);

  return (
    <main>
      <section className="search">
        <form className="search-form">
          <input
            type="text"
            placeholder="search"
            className="form-input"
            ref={searchRef}
          ></input>
          <button
            type="submit"
            className="submit-btn"
            onClick={(e) => {
              e.preventDefault();
              setPage(1);
              searchImages();
            }}
          >
            <FaSearch></FaSearch>
          </button>
        </form>
      </section>
      <section className="photos">
        <div className="photos-center">
          {photos.map((photo, index) => {
            return <Photo key={index} {...photo}></Photo>;
          })}
        </div>
        {loading && <h2 className="loading">Loading...</h2>}
      </section>
    </main>
  );
}

export default App;
