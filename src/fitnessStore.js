import { createStore } from "./library/createStore";

// 1. Initial State
const initialState = {
  distanceGoal: 100,
  weightLossGoal: 5,
  distanceCovered: 0,
  weightLost: 0,
  workouts: [],
};

// 2. Reducer Function
export const fitnessReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DISTANCE_GOAL":
      return { ...state, distanceGoal: Number(action.payload) };
    case "SET_WEIGHT_LOSS_GOAL":
      return { ...state, weightLossGoal: Number(action.payload) };
    case "ADD_WORKOUT":
      return {
        ...state,
        workouts: [...state.workouts, action.payload],
        distanceCovered:
          action.payload.type === "Running" ||
          action.payload.type === "Cycling" ||
          action.payload.type === "Swimming"
            ? state.distanceCovered + Number(action.payload.distance || 0)
            : state.distanceCovered,
        weightLost:
          action.payload.type === "Yoga"
            ? state.weightLost + 0.1 // Example logic
            : state.weightLost,
      };
    default:
      return state;
  }
};

// 3. Create the global store instance
const store = createStore(fitnessReducer, initialState);
export default store;
