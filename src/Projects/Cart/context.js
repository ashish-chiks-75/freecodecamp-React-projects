import React, { useContext, useReducer, useEffect } from "react";
// import cartItems from "./data";
import reducer from "./reducer";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext();

const defaultState = {
  loading: false,
  cart: [],
  total: 0,
  count: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const clearCart = () => {
    dispatch({ type: "CLEAR" });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  const increaseItem = (id) => {
    dispatch({ type: "INC", payload: id });
  };

  const decreaseItem = (id) => {
    dispatch({ type: "DEC", payload: id });
  };

  const fetchData = async () => {
    dispatch({type: "LOADING"})
    const response = await fetch(url)
    const data = await response.json()

    dispatch({type: "DISPLAY", payload: data})
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeItem,
        increaseItem,
        decreaseItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
