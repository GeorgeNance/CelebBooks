import React from "react";
import PersonCard from "./PersonCard/PersonCard";

import style from "./PeopleCards.module.css";

const PeopleCards = props => {
  const people = props.people.map((person, index) => {
    return (
      <PersonCard
        key={index}
        person={person}
        click={() => props.click(index)}
      ></PersonCard>
    );
  });

  return <div className={style.PeopleCards}>{people}</div>;
};

export default PeopleCards;
