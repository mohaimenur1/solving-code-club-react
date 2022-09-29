import React from "react";
import Profile from "../Profile/Profile";
import TimeBreak from "../TimeBreak/TimeBreak";
import TotalTime from "../TotalTime/TotalTime";

const SideBar = ({ timeRequired }) => {
  return (
    <div className="">
      <h1 className="text-center">SideBar</h1>
      <Profile />
      <TimeBreak />
      <TotalTime timeRequired={timeRequired} />
    </div>
  );
};

export default SideBar;
