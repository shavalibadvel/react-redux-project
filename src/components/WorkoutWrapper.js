import React from "react";
import WorkoutList from "./WorkoutList";
import AddWorkout from "./AddWorkout";
import WorkoutFilter from "./WorkoutFilter";

const WorkoutWrapper = () => {
  return (
    <div>
      <h2>Workouts</h2>
      <WorkoutFilter />
      <WorkoutList />
      <AddWorkout />
    </div>
  );
};

export default WorkoutWrapper;
