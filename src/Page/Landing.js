import React, { useEffect, useState } from "react";
import CardList from "../components/Card/CardList";
import Header from "../components/Header/Header";
import Question from "../components/Question/Question";
import SideBar from "../components/SideBar/SideBar";
import "./Landing.css";

const Landing = () => {
  const [codingData, setCodingData] = useState([]);
  const [timeRequired, setTimeRequired] = useState([]);

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

  const addExerciseTime = (data) => {
    const newTime = [...timeRequired, data];
    // console.log(newTime);
    setTimeRequired(newTime);
  };

  return (
    <div>
      <Header />
      <div className="underline mt-5"></div>
      <div className="main-section container">
        <div className="row">
          <div className="col-lg-6 mt-5">
            <h1 className="text-center fw-normal">Choose Your Best Practise</h1>
            <div className="row container">
              {codingData.map((data) => (
                <CardList
                  key={data.id}
                  data={data}
                  addExerciseTime={addExerciseTime}
                />
              ))}
            </div>
          </div>
          <div className="col-lg-6 mt-5">
            <SideBar timeRequired={timeRequired} />
          </div>
          <div className="mt-5 col-lg-12">
            <h2 className="text-center">Questions And Answers</h2>
            <Question />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
