import React from "react";
import classes from "./MeetupItem.module.css";
import Card from "../Reusable-UI/Card";

function MeetupItem(props) {
  return (
    <li className={classes.item}>
      <Card>
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
      </Card>
    </li>
  );
}

export default MeetupItem;
