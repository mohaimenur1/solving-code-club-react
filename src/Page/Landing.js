import React, { useEffect, useState } from "react";
import CardList from "../components/Card/CardList";
import Header from "../components/Header/Header";
import SideBar from "../components/SideBar/SideBar";
import "./Landing.css";

const Landing = () => {
  const [codingData, setCodingData] = useState([]);

  //async function
  const fetchingData = async () => {
    const url = `products.json`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setCodingData(data);
  };

  //fetching data
  useEffect(() => {
    fetchingData();
  }, []);

  return (
    <div>
      <Header />
      <div className="underline mt-5"></div>
      <div className="main-section container">
        <div className="row">
          <div className="col-lg-6">
            {codingData.map((data) => (
              <CardList data={data} />
            ))}
          </div>
          <div className="col-lg-6">
            <SideBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
