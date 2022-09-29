import React from "react";
import "./Card.css";

const Card = ({ data, addExerciseTime }) => {
  const { name, details, timerequired, img } = data;
  //   console.log(name, details, timerequired, img);
  return (
    <div>
      <div className="card">
        <img
          src={img}
          className="card-img-top img-fluid w-100 h-100"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{details}</p>
          <p className="card-text fw-bold">Given Time: {timerequired}</p>
          <button
            onClick={() => addExerciseTime(timerequired)}
            className="btn btn-primary fw-bold"
          >
            Join Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
