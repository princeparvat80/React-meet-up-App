import React from "react";
import classes from "./MeetupItem.module.css";

function MeetupItem(props) {
  return (
    <li className={classes.item}>
      <div className={classes.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={classes.content}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.discription}</p>
      </div>
      <div className={classes.actions}>
        <button>TO FAVORITES</button>
      </div>
    </li>
  );
}

export default MeetupItem;
