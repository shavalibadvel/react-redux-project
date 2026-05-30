import React, { useState } from "react";
import { setFilterType } from "../slices/filterSlice";
import { useDispatch, useSelector } from "react-redux";
const WorkoutFilter = () => {
  const filterType = useSelector((state) => state.filter?.filterType) || "All";
  const dispatch = useDispatch();
  const [selectedType, setSelectedType] = useState(filterType);
  const filterTypes = ["All", "Running", "Cycling", "Swimming", "Yoga"];

  const handleFilterChange = (type) => {
    // Executes the action creator cleanly
    dispatch(setFilterType(type));
    setSelectedType(type);
  };

  return (
    <div>
      <h3>Filter Workouts</h3>
      <div className="filter-list">
        {filterTypes.map((type) => (
          <button
            key={type}
            className={selectedType === type ? "selected" : ""}
            onClick={() => handleFilterChange(type)}
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
};

export default WorkoutFilter;
