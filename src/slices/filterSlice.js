import { createSlice } from "@reduxjs/toolkit";
const filterSlice = createSlice({
  name: "filter",
  initialState: {
    filterType: "All",
  },
  reducers: {
    // addWorkout: (state, action) => {
    //   state.workouts.push(action.payload);
    // },
    setFilterType: (state, action) => {
      state.filterType = action.payload;
    },
  },
});
// console.log(filterSlice);
const { setFilterType } = filterSlice.actions;
export { setFilterType };
export default filterSlice.reducer;
