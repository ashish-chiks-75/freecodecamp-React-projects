const reducer = (state, action) => {
  if (action.type === "LOADING") {
    return { ...state, loading: true };
  }

  if (action.type === "FETCH") {
    return {
      ...state,
      loading: false,
      movies: action.payload,
      prevSearch: state.search,
      error: { show: false, msg: "" },
    };
  }

  if (action.type === "SEARCH") {
    return { ...state, loading: false, search: action.payload };
  }

  if (action.type === "ERROR") {
    return {
      ...state,
      loading: false,
      error: { show: true, msg: action.payload },
      prevSearch: state.search,
    };
  }

  return state;
};

export default reducer;
