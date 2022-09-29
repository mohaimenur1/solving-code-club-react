import React from "react";
import Card from "./Card";

const CardList = ({ data, addExerciseTime }) => {
  return (
    <div className="col-lg-4 mt-5 mb-4">
      <Card data={data} addExerciseTime={addExerciseTime} />
    </div>
  );
};

export default CardList;
