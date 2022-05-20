const initialState = {};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE-SEARCH":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default searchReducer;
