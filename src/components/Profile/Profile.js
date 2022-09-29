import React from "react";
import ProfPic from "../../img/my-pic.jpg";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="mt-5 text-center">
      <div className="card card-bg-color">
        <h5 className="card-title text-center mt-3">Profile</h5>
        <div className="card-body">
          <img src={ProfPic} className="card-img-top prof-pic" alt="..." />
          <h5 className="card-title text-center mt-3">Md.Mohiminiur</h5>
          <div className="achievement d-flex justify-content-evenly mt-3">
            <div className="first prof-pic p-3 background-clr d-flex flex-column justify-content-center">
              <h6>Problem Solving</h6>
              <strong>46</strong>
            </div>
            <div className="second prof-pic p-3 background-clr d-flex flex-column justify-content-center">
              <h6>Achievement</h6>
              <strong>Ultra Solver</strong>
            </div>
            <div className="third prof-pic p-3 background-clr d-flex flex-column justify-content-center">
              <h6>Profile Update</h6>
              <strong>60%</strong>
            </div>
          </div>
          <button className="btn btn-primary mt-4">Go somewhere</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
