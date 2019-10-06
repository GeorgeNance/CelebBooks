import React from "react";
import style from "./PersonCard.module.css";

import image from "../../../assets/images/people/bill_gates.jpg";
const PersonCard = props => {
  const person = props.person;
  return (
    <div className={style.Person} onClick={props.click}>
      <img
        className={style.PersonImage}
        src={require("../../../assets/images/" + person.image)}
      ></img>

      <h4>
        <strong>{person.name}</strong>
      </h4>
      <div>
        <p>{person.description}</p>
      </div>
    </div>
  );
};

export default PersonCard;
