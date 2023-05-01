import React from "react";

const Skill = (props) => {
  return (
    <div
      className={
        "duration-500 py-2 rounded-lg cursor-pointer hover:scale-125 " +
        " " +
        props.style
      }
    >
      <a href={props.link} target="_blank" rel="noreferrer">
        <img src={props.src} alt={props.title} className="mx-auto w-14 " />
      </a>
    </div>
  );
};

export default Skill;
