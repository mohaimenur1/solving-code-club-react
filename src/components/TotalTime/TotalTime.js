import React from "react";
import "./TotalTime.css";

const TotalTime = () => {
  return (
    <div className="mt-5">
      <div className="card p-4">
        <h3 className="text-center">Exercise Time</h3>
        <div className="first mb-3">
          <h6>Coding Time</h6>
          <div className="card bg-light p-3">500s</div>
        </div>
        <div className="second">
          <h6>Break Time</h6>
          <div className="card bg-light p-3">15s</div>
        </div>
        <button className="mt-3 btn btn-primary">Check Activity</button>
      </div>
    </div>
  );
};

export default TotalTime;
