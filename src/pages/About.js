import React, { Component } from "react";
import "./About.css";
import profile_pic from "../assets/profile_pic.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        {/* <p>Design your About me page </p> */}
        <div class="split left">
          <div className="centered">
            <img
              className="profile_image"
              src={profile_pic}
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Abel Adane</div>
            <div className="brief_description">
              I Am a computer science major student from New Jersey. I was born in Ethiopia and first generation student.
              I play soccer in my free time and go to the gym. 
            </div>
          </div>
        </div>
      </div>
    );
  }
}