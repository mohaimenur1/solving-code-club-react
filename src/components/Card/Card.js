import React from "react";
import "./Card.css";

const Card = ({ data }) => {
  const { name, details, timerequired, img } = data;
  //   console.log(name, details, timerequired, img);
  return (
    <div>
      <div className="card h-75">
        <img src={img} className="card-img-top img-fluid" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{details}</p>
          <p className="card-text fw-bold">Given Time: {timerequired}</p>
          <button className="btn btn-primary fw-bold">Join</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
