import React from "react";
import Logo from "../../img/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="text-center mt-5">
      <img className="img-fluid" src={Logo} alt="" />
      <h1 className="mt-4 display-3">Solving Code Club</h1>
    </div>
  );
};

export default Header;
