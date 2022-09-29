import React from "react";
import "./TimeBreak.css";

const TimeBreak = ({
  ten,
  twenty,
  thirty,
  fourty,
  handleChangeTen,
  handleChangeTwenty,
  handleChangeThirty,
  handleChangeFourty,
  handleChange,
}) => {
  return (
    <div className="card d-flex flex-column mt-5">
      <h3 className="text-center">Time Break</h3>
      <div className="achievement d-flex justify-content-evenly mt-3 bg-light p-5 text-center">
        <div
          onClick={() => handleChange(ten)}
          className="first achievement-circle p-3 background-clr d-flex flex-column justify-content-center shadow me-2"
        >
          <strong>{ten}s</strong>
        </div>
        <div
          onClick={() => handleChange(twenty)}
          className="second achievement-circle p-3 background-clr d-flex flex-column justify-content-center shadow me-2"
        >
          <strong>{twenty}s</strong>
        </div>
        <div
          onClick={() => handleChange(thirty)}
          className="third achievement-circle p-3 background-clr d-flex flex-column justify-content-center shadow me-2"
        >
          <strong>{thirty}s</strong>
        </div>
        <div
          onClick={() => handleChange(fourty)}
          className="third achievement-circle p-3 background-clr d-flex flex-column justify-content-center shadow me-2"
        >
          <strong>{fourty}s</strong>
        </div>
      </div>
    </div>
  );
};

export default TimeBreak;
