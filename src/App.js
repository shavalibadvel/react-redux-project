import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import WorkoutWrapper from "./components/WorkoutWrapper";
import Goals from "./components/Goals";
import Progress from "./components/Progress";
import workoutSlice from "./slices/workoutSlice";
const App = () => {
  return (
    <div>
      <div>
        <img
          src="https://i.ibb.co/8jbNLyB/premium-photo-1681433383783-661b519b154a.jpg"
          alt="premium-photo-1681433383783-661b519b154a"
          border="0"
          width="100%"
          height={400}
        />
      </div>
      <div className="container">
        <Dashboard />
        <div className="flex-view">
          <Goals />
          <Progress />
        </div>
        <WorkoutWrapper />
      </div>
    </div>
  );
};

export default App;
