import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const WorkoutList = () => {
  const workouts = useSelector((state) => state.workouts?.workouts) || [];
  const filterType = useSelector((state) => state.filter?.filterType) || "All";
  const filteredWorkouts =
    filterType === "All"
      ? workouts
      : workouts.filter(
          (workout) => workout.type.toLowerCase() === filterType.toLowerCase()
        );

  return (
    <ul>
      {filteredWorkouts.map((workout, index) => (
        <li key={workout.id || index}>
          {workout.date} - {workout.type}: {workout.duration} mins,{" "}
          {workout.calories} calories
        </li>
      ))}
    </ul>
  );
};

export default WorkoutList;
