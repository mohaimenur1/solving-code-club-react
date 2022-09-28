import React, { useEffect, useState } from "react";
import CardList from "../components/Card/CardList";
import Header from "../components/Header/Header";
import SideBar from "../components/SideBar/SideBar";
import "./Landing.css";

const Landing = () => {
  const [codingData, setCodingData] = useState([]);

  //fetching data
  useEffect(() => {}, []);

  return (
    <div>
      <Header />
      <div className="underline mt-5"></div>
      <div className="main-section container">
        <div className="row">
          <div className="col-lg-6">
            <CardList />
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
