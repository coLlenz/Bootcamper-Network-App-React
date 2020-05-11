import React, { useState } from "react";
import cn from "classnames";
import css from "./EventsPage.module.css";

function EventsPage({ name, link, date, time }) {
  const [isClicked, setIsClicked] = useState(false);
  function handleClick() {
    setIsClicked(!isClicked);
  }
  return (
    <>
      <div className={css.eachEvent}>
        <a href={link} className={css.link}>
          <p>{name}</p>
        </a>
        <p>{date}</p>
        <p>{time}</p>

        {/* <button
          className={cn({ [css.clicked]: isClicked })}
          onClick={handleClick}
        >
          I'm Attending
        </button> */}
      </div>
    </>
  );
}

export default EventsPage;
