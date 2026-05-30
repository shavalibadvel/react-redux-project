const INITIAL_STATE = {
  workoutFilter: "All",
};

const filterReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_FILTER":
      return {
        // ...state,
        workoutFilter: action.payload,
      };
    default:
      return state;
  }
};

export default filterReducer;
