const reducer = (state, action) => {
  if (action.type === "LOADING") return { ...state, loading: true };

  if (action.type === "DISPLAY") {
    let total = 0;
    let count = 0;
    action.payload.forEach((element) => {
      count += element.amount;
      total += element.amount * parseFloat(element.price);
    });
    return { loading: false, cart: action.payload, total, count };
  }

  if (action.type === "CLEAR") {
    return {
      loading: false,
      cart: [],
      total: 0,
      count: 0,
    };
  }

  if (action.type === "REMOVE") {
    let newTotal = state.total;
    let newCount = state.count;
    const newCart = state.cart.filter((item) => {
      if (item.id === action.payload) {
        newTotal = newTotal - parseFloat(item.price) * item.amount;
        newCount = newCount - item.amount;
        return false;
      } else return true;
    });
    return { ...state, cart: newCart, count: newCount, total: newTotal };
  }

  if (action.type === "INC") {
    let newTotal = state.total;
    const newCart = state.cart.map((item) => {
      if (item.id === action.payload) {
        newTotal += parseFloat(item.price);
        return { ...item, amount: item.amount + 1 };
      } else {
        return item;
      }
    });
    return { ...state, cart: newCart, count: state.count + 1, total: newTotal };
  }

  if (action.type === "DEC") {
    let newTotal = state.total;
    const newCart = state.cart
      .map((item) => {
        if (item.id === action.payload) {
          newTotal -= parseFloat(item.price);
          return { ...item, amount: item.amount - 1 };
        } else {
          return item;
        }
      })
      .filter((item) => item.amount !== 0);
    return { ...state, cart: newCart, count: state.count - 1, total: newTotal };
  }

  return state;
};

export default reducer;
