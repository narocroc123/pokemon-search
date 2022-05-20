const initialState = [];

const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE-HISTORY":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default historyReducer;
