export const updateSearch = (data) => {
  return {
    type: "UPDATE-SEARCH",
    payload: data,
  };
};

export const updateHistory = (data) => {
  return {
    type: "UPDATE-HISTORY",
    payload: data,
  };
};
