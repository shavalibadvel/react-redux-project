import combineReducers from "../library/combineReducers";
import workoutReducer from "../slices/workoutSlice";
import goalsReducer from "./addGoalsReducer";
import filterReducer from "../slices/filterSlice";
import progressReducer from "./progressReducer";

const reducerMappings = {
  workouts: workoutReducer,
  goals: goalsReducer,
  filter: filterReducer,
  progress: progressReducer,
};
export default reducerMappings;
