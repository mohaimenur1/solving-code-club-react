import React, { useEffect, useState } from "react";
import Profile from "../Profile/Profile";
import TimeBreak from "../TimeBreak/TimeBreak";
import TotalTime from "../TotalTime/TotalTime";

const SideBar = ({ timeRequired }) => {
  const [timeBreak, setTimeBreak] = useState("");
  const [ten, setTen] = useState("10");
  const [twenty, setTwenty] = useState("20");
  const [thirty, setThirty] = useState("30");
  const [fourty, setFourty] = useState("40");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("time"));
    if (data) {
      setTimeBreak(data);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("time", JSON.stringify(timeBreak));
  }, [timeBreak]);

  const handleChange = (id) => {
    // localStorage.setItem(id, JSON.stringify(timeBreak));
    const newTime = [id];
    setTimeBreak(newTime);
  };

  // const values = localStorage.getItem(id);
  // setTimeBreak(values);

  // const handleChangeTen = () => {
  //   // localStorage.setItem("ten", 10);
  //   setTimeBreak(ten);
  // };
  // const handleChangeTwenty = () => {
  //   localStorage.setItem("twenty", 20);
  //   setTimeBreak(twenty);
  // };
  // const handleChangeThirty = () => {
  //   localStorage.setItem("thirty", 30);
  //   setTimeBreak(thirty);
  // };
  // const handleChangeFourty = () => {
  //   localStorage.setItem("fourty", 40);
  //   setTimeBreak(fourty);
  // };

  return (
    <div className="">
      <h1 className="text-center">SideBar</h1>
      <Profile />
      <TimeBreak
        ten={ten}
        twenty={twenty}
        thirty={thirty}
        fourty={fourty}
        // handleChangeTen={handleChangeTen}
        // handleChangeTwenty={handleChangeTwenty}
        // handleChangeThirty={handleChangeThirty}
        // handleChangeFourty={handleChangeFourty}
        handleChange={handleChange}
      />
      <TotalTime timeRequired={timeRequired} timeBreak={timeBreak} />
    </div>
  );
};

export default SideBar;
