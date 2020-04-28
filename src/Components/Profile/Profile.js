import React, { useState, useEffect } from "react";
import css from "./Profile.module.css";
import TeamData from "./TeamData";
import twitterLogo from "../../images/twitter-logo.png";
import linkedinLogo from "../../images/linkedin.png";
import githubLogo from "../../images/github.png";
import profilePic from "../../images/jodie.jpg";
import webLogo from "../../images/web.svg";

import { useParams } from "react-router-dom";
import { URL } from "../../config";

function Profile() {
  const [profileData, setProfileData] = useState([]);
  const { firstname } = useParams();
  useEffect(() => {
    async function getProfileData() {
      const res = await fetch(`${URL}/bootcampers?name=${firstname}`, {
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
      const data = await res.json();
      console.log(data.payload[0]);
      setProfileData(data.payload[0]);
    }
    getProfileData();
  }, []);
  const {
    first_name,
    surname,
    region,
    cohort_num,
    profile,
    twitter,
    linkedin,
    github,
    portfolio,
    company_name,
    start_date,
    salary,
    previous_roles,
    job_satisfaction,
    new_job,
  } = profileData;
  const [sliderValue, setSliderValue] = useState(3);
  const [option, setOption] = useState("");

  return (
    <>
      <div className={css.info}>
        <img src={profilePic} alt="Profile Pic" className={css.profilePic} />
        <h2>
          {first_name} {surname}
        </h2>
        <img
          src={twitterLogo}
          alt="twitter logo"
          className={css.icons}
          onClick={() => window.location.assign(twitter)}
        />
        <img
          src={linkedinLogo}
          alt="linkedin logo"
          className={css.icons}
          onClick={() => window.location.assign(linkedin)}
        />
        <img
          src={githubLogo}
          alt="github logo"
          className={css.icons}
          onClick={() => window.location.assign(github)}
        />
        <img
          src={webLogo}
          alt="web logo"
          className={css.icons}
          onClick={() => window.location.assign(portfolio)}
        />
      </div>
      <div className={css.profileContainer}>
        <ul>
          <li>
            <span>Region: </span>
            {region}
          </li>
          <li>
            <span>Cohort: </span>
            {cohort_num}
          </li>
          <li>
            <span>About Me: </span>
            {profile}
          </li>
        </ul>
      </div>
      <div className={css.profileContainer}>
        <ul>
          <li>
            <span>Current Role: </span>
          </li>
          <li>{company_name}</li>
          <li>{start_date}</li>
          <li>{salary}</li>
        </ul>
      </div>
      <div className={css.profileContainer}>
        <ul>
          <span>Previous Roles: </span>
          {previous_roles &&
            previous_roles.map((item) => {
              return <li> {item}</li>;
            })}
        </ul>
      </div>
      <TeamData
        sliderValue={sliderValue}
        setSliderValue={setSliderValue}
        option={option}
        setOption={setOption}
      />
    </>
  );
}

export default Profile;
