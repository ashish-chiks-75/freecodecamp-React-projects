const reducer = (state, action) => {
  if (action.type === "LOADING") {
    return { ...state, isLoading: true };
  }

  if (action.type === "FETCH") {
    return {
      ...state,
      isLoading: false,
      hits: action.payload.hits,
      nbPages: action.payload.nbPages,
    };
  }

  if (action.type === "REMOVE_STORY") {
    const newHits = state.hits.filter(
      (story) => story.objectID !== action.payload
    );
    return {...state, hits: newHits}
  }

  if (action.type === "SEARCH") {
    return {...state, query: action.payload, page: 0}
  } 

  if (action.type === "PAGE") {
    return {...state, page: action.payload}
  }

  return state;
};
export default reducer;
