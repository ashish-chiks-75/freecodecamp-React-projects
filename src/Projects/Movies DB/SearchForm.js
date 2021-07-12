import React, { useRef, useEffect } from "react";
import { useGlobalContext } from "./context";
const SearchForm = () => {
  const { dispatch, error, prevSearch } = useGlobalContext();
  const searchRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "SEARCH", payload: searchRef.current.value });
  };

  useEffect(() => {
    searchRef.current.value = prevSearch;
    searchRef.current.focus();
  }, [prevSearch]);

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <h2>Search Movies</h2>
      <input
        type="text"
        className="form-input"
        ref={searchRef}
        placeholder="default search: action"
      ></input>
      <button type="submit" className="btn">
        Search
      </button>
      {error.show && <div className="error">{error.msg}</div>}
    </form>
  );
};

export default SearchForm;
