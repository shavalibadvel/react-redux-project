const combineReducers = (reducerMappings) => {
  let initialState = {};

  Object.keys(reducerMappings).forEach((id) => (initialState[id] = undefined));

  const combineReducer = (state = initialState, action) => {
    let newState = { ...state };

    Object.entries(reducerMappings).forEach(([id, reducer]) => {
      newState[id] = reducer(newState[id], action);
    });

    return newState;
  };

  return combineReducer;
};

export default combineReducers;
