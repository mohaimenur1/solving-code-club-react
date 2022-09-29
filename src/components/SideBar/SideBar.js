import React from "react";
import Profile from "../Profile/Profile";
import TimeBreak from "../TimeBreak/TimeBreak";
import TotalTime from "../TotalTime/TotalTime";

const SideBar = () => {
  return (
    <div className="container">
      <h1 className="text-center">SideBar</h1>
      <Profile />
      <TimeBreak />
      <TotalTime />
    </div>
  );
};

export default SideBar;
