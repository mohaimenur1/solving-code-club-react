import React from "react";
import "./TotalTime.css";

const TotalTime = ({ timeRequired }) => {
  console.log(timeRequired);
  let initialTime = 0;
  // console.log(time);
  for (const time of timeRequired) {
    // initialTime += [parseInt(time)];
    initialTime += parseInt([time]);
    let value = parseInt("12");
    console.log(value);
    console.log(typeof value);

    console.log(initialTime);
    console.log(typeof initialTime);
  }

  return (
    <div className="mt-5">
      <div className="card p-4">
        <h3 className="text-center">Exercise Time</h3>
        <div className="first mb-3">
          <h6>Coding Time</h6>
          <div className="card bg-light p-3">{initialTime} seconds</div>
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
