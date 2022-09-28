import React from "react";
import Card from "./Card";

const CardList = ({ data }) => {
  return (
    <div className="col-lg-4">
      <Card data={data} />
    </div>
  );
};

export default CardList;
