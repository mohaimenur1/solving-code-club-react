import React from "react";
import "./TimeBreak.css";

const TimeBreak = () => {
  return (
    <div className="card d-flex flex-column mt-5">
      <h3 className="text-center">Time Break</h3>
      <div className="achievement d-flex justify-content-evenly mt-3 bg-light p-5 text-center">
        <div className="first achievement-circle p-3 background-clr d-flex flex-column justify-content-center shadow me-2">
          <strong>10s</strong>
        </div>
        <div className="second achievement-circle p-3 background-clr d-flex flex-column justify-content-center shadow me-2">
          <strong>20s</strong>
        </div>
        <div className="third achievement-circle p-3 background-clr d-flex flex-column justify-content-center shadow me-2">
          <strong>30s</strong>
        </div>
        <div className="third achievement-circle p-3 background-clr d-flex flex-column justify-content-center shadow me-2">
          <strong>40s</strong>
        </div>
      </div>
    </div>
  );
};

export default TimeBreak;
