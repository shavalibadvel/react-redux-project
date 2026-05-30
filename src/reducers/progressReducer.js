const INITIAL_STATE = {
  progress: {
    distanceCovered: 0,
    weightLost: 0,
  },
};

const progressReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default progressReducer;
