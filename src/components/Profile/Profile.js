import React from "react";
import ProfPic from "../../img/my-pic.jpg";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="mt-5 text-center">
      <div className="card">
        <h5 className="card-title text-center mt-3">Profile</h5>
        <div className="card-body bg-light">
          <img
            src={ProfPic}
            className="card-img-top prof-pic shadow"
            alt="..."
          />
          <h5 className="card-title text-center mt-3">Md.Mohiminiur</h5>
          <strong className="text-center">JavaScript Developer</strong>
          <div className="achievement d-flex justify-content-evenly mt-3 bg-light p-5">
            <div className="first achievement-circle p-3 background-clr d-flex flex-column justify-content-center shadow me-2">
              <h6>Problem Solving</h6>
              <strong>46</strong>
            </div>
            <div className="second achievement-circle p-3 background-clr d-flex flex-column justify-content-center shadow me-2">
              <h6>Reward</h6>
              <strong>Ultra Solver</strong>
            </div>
            <div className="third achievement-circle p-3 background-clr d-flex flex-column justify-content-center shadow me-2">
              <h6>Profile Update</h6>
              <strong>60%</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
