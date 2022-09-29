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
}) => {
  return (
    <div className="card d-flex flex-column mt-5">
      <h3 className="text-center">Time Break</h3>
      <div className="achievement d-flex justify-content-evenly mt-3 bg-light p-5 text-center">
        <div
          onClick={handleChangeTen}
          className="first achievement-circle p-3 background-clr d-flex flex-column justify-content-center shadow me-2"
        >
          <strong>{ten}s</strong>
        </div>
        <div
          onClick={handleChangeTwenty}
          className="second achievement-circle p-3 background-clr d-flex flex-column justify-content-center shadow me-2"
        >
          <strong>{twenty}s</strong>
        </div>
        <div
          onClick={handleChangeThirty}
          className="third achievement-circle p-3 background-clr d-flex flex-column justify-content-center shadow me-2"
        >
          <strong>{thirty}s</strong>
        </div>
        <div
          onClick={handleChangeFourty}
          className="third achievement-circle p-3 background-clr d-flex flex-column justify-content-center shadow me-2"
        >
          <strong>{fourty}s</strong>
        </div>
      </div>
    </div>
  );
};

export default TimeBreak;
