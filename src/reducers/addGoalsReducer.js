const INITIAL_STATE = {
  goals: {
    distance: 100,
    weightLoss: 5,
  },
};

const goalsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_GOALS":
      return {
        ...state,
        goals: { ...state.goals, ...action.payload },
      };
    default:
      return state;
  }
};

export default goalsReducer;
