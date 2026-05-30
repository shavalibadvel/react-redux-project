import React, { useEffect, useState } from "react";
import store from "../workoutStore";
import { ADD_GOALS_ACTION } from "../actions";

const Goals = () => {
  const goals = store.getState().goals.goals;
  const [distance, setDistance] = useState(goals.distance);
  const [weightLoss, setWeightLoss] = useState(goals.weightLoss);

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "20px",
    width: "100%",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    paddingLeft: "20px",
    paddingRight: "20px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  };

  const inputStyle = {
    margin: "10px 0",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    width: "100%",
  };

  const labelStyle = {
    fontWeight: "bold",
    marginBottom: "5px",
    color: "#333",
  };

  useEffect(() => {
    store.dispatch(
      ADD_GOALS_ACTION({
        distance: distance,
        weightLoss: weightLoss,
      })
    );
  }, [distance, weightLoss]);
  return (
    <div style={containerStyle}>
      <h2>Set Your Goals</h2>
      <div style={formStyle}>
        <div>
          <label style={labelStyle}>Distance Goal (km):</label>
          <input
            type="number"
            value={distance}
            name="distance"
            onChange={(e) => setDistance(e.target.value)}
            style={inputStyle}
          />
        </div>
        <div>
          <label style={labelStyle}>Weight Loss Goal (kg):</label>
          <input
            type="number"
            value={weightLoss}
            name="weightLoss"
            onChange={(e) => setWeightLoss(e.target.value)}
            style={inputStyle}
          />
        </div>
      </div>
    </div>
  );
};

export default Goals;
