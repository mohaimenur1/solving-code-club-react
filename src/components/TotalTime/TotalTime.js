import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./TotalTime.css";

const TotalTime = ({ timeRequired, timeBreak }) => {
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

  const notify = () => toast("Activity Successfully Done!😊");

  return (
    <div className="mt-5">
      <div className="card p-4">
        <h3 className="text-center">Exercise Time</h3>
        <div className="first mb-3">
          <h6>Coding Time</h6>
          <div className="card bg-light p-3">{initialTime} minutes</div>
        </div>
        <div className="second">
          <h6>Break Time</h6>
          <div className="card bg-light p-3">{timeBreak} hours</div>
        </div>
        <button onClick={notify} className="mt-3 btn btn-primary">
          Check Activity
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default TotalTime;
