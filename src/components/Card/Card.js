import React from "react";
import "./Card.css";

const Card = ({ data }) => {
  const { name, details, timerequired, img } = data;
  //   console.log(name, details, timerequired, img);
  return (
    <div>
      <div className="card">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{details}</p>
          <button className="btn btn-primary">Join</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
