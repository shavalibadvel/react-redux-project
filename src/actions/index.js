import { SET_GOALS, UPDATE_PROGRESS } from "./type";

const ADD_GOALS_ACTION = (newGoal) => ({
  type: SET_GOALS,
  payload: newGoal,
});

const SET_UPDATE_PROGRESS_ACTION = (newProgress) => ({
  type: UPDATE_PROGRESS,
  payload: newProgress,
});
export { ADD_GOALS_ACTION, SET_UPDATE_PROGRESS_ACTION };
