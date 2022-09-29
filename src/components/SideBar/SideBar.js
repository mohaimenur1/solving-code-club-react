import React, { useState } from "react";
import Profile from "../Profile/Profile";
import TimeBreak from "../TimeBreak/TimeBreak";
import TotalTime from "../TotalTime/TotalTime";

const SideBar = ({ timeRequired }) => {
  const [timeBreak, setTimeBreak] = useState("");
  const [ten, setTen] = useState("10");
  const [twenty, setTwenty] = useState("20");
  const [thirty, setThirty] = useState("30");
  const [fourty, setFourty] = useState("40");

  const handleChangeTen = () => {
    setTimeBreak(ten);
  };
  const handleChangeTwenty = () => {
    setTimeBreak(twenty);
  };
  const handleChangeThirty = () => {
    setTimeBreak(thirty);
  };
  const handleChangeFourty = () => {
    setTimeBreak(fourty);
  };

  return (
    <div className="">
      <h1 className="text-center">SideBar</h1>
      <Profile />
      <TimeBreak
        ten={ten}
        twenty={twenty}
        thirty={thirty}
        fourty={fourty}
        handleChangeTen={handleChangeTen}
        handleChangeTwenty={handleChangeTwenty}
        handleChangeThirty={handleChangeThirty}
        handleChangeFourty={handleChangeFourty}
      />
      <TotalTime timeRequired={timeRequired} timeBreak={timeBreak} />
    </div>
  );
};

export default SideBar;
