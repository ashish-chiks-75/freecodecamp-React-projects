import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
// make sure to use https
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=df8707f0`;
const AppContext = React.createContext();

const defaultState = {
  loading: false,
  error: { show: false, msg: "" },
  movies: [],
  search: "",
  prevSearch: "",
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const fetchMovies = async (url) => {
    dispatch({ type: "LOADING" });
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.Response === "False") {
        dispatch({ type: "ERROR", payload: data.Error });
        return;
      }
      dispatch({ type: "FETCH", payload: data.Search });
    } catch (error) {
      dispatch({ type: "ERROR", payload: "some internal error occured" });
    }
  };

  useEffect(() => {
    fetchMovies(
      `${API_ENDPOINT}&s=${state.search === "" ? "action" : state.search}`
    );
  }, [state.search]);

  return (
    <AppContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
