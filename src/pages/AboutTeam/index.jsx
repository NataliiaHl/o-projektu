import React from "react";
import './style.css';

import Inna from "./Inna";
import Natali from "./Natali";
import Mentors from "./Mentors";



const AboutTeam = () => {
  return (
    <>
      <div className="team__section active">
        <div className="team__container">
          <Natali />
          <Mentors />
          <Inna />
        </div>
      </div>
    </>
  )
};

export default AboutTeam;