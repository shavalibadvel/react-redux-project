import { createSlice } from "@reduxjs/toolkit";
const workoutSlice = createSlice({
  name: "workouts",
  initialState: {
    workouts: [],
    // filterType:"All"
  },
  reducers: {
    addWorkout: (state, action) => {
      state.workouts.push(action.payload);
    },
    // setFilterType:(state,action)=>{
    //     state.filterType=action.payload
    // },
  },
});

const { addWorkout } = workoutSlice.actions;
export { addWorkout };
export default workoutSlice.reducer;
