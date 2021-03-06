import React, { useEffect, useState } from "react";
import css from "./Dashboard.module.css";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import { Link } from "react-router-dom";
import { URL } from "../../config";

import EventsPage from "../MeetUp/EventsPage";
import SearchBar from "../SearchBar";
import Divider from "../Divider";

function Dashboard({ state }) {
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function getMessage() {
      try {
        const res = await fetch(`${URL}/dashboard`);
        const data = await res.json();
        if (data.payload) {
          setMessage(data.payload[0]?.message);
        }
      } catch (err) {
        console.log(`fetch error`, err);
      }
    }
    getMessage();
  }, []);

  return (
    <>
      <SearchBar />
      <div className={css.dash}>
        <h3 className={css.headerOnBlue}>Message From the SoC Team</h3>
        <div className={css.messagecontainer}>
          <p>{message}</p>
          <small className={css.signed}> - The SoC Team</small>
        </div>

        <h3 className={css.header}> Latest From The Community </h3>

        <div className={css.container}>
          <br />
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="BootcamperBot"
            options={{ height: "45vh", width: "90vw" }}
          />
        </div>
        <Link to="/events" style={{ textDecoration: "none", color: "black" }}>
          <h3 className={css.header}> Latest Events </h3>
        </Link>
        <div className={css.container}>
          <EventsPage
            name={state[0]?.name || "Loading..."}
            link={state[0]?.link}
            date={state[0]?.local_date}
            time={state[0]?.local_time}
            venue={state[0]?.venue?.name}
          />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
