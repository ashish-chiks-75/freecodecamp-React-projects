import React, {useRef, useEffect} from 'react'
import { useGlobalContext } from './context'

const SearchForm = () => {

  const {query, dispatch} = useGlobalContext()
  const searchRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({type: "SEARCH", payload: searchRef.current.value})
  }

  useEffect(() => {
    searchRef.current.value = query;
    searchRef.current.focus();
  }, [query]);

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <h2>Search hacker News</h2>
      <input type="text" className="form-input" ref={searchRef}></input>
      <button type="submit" className="btn">Search</button>
    </form>
  )
}

export default SearchForm
