import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const EtudeItem = (props) => {
  return (
    <div className="w-full flex gap-4 ">
      <a
        href={props.link}
        className="flex w-32 h-32 object-cover rounded-xl shadow-md p-2 hover:scale-105 duration-200"
        style={{ backgroundColor: "#1E3B66" }}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={props.image}
          alt={props.title}
          className="w-full h-full object-contain"
        />
      </a>
      <div className="w-64 sm:w-full">
        <p className="font-bold text-sm text-gray-400">{props.year}</p>
        <p className="font-bold">{props.name}</p>
        <div className="flex gap-1 items-center ">
          <LocationOnIcon fontSize="small" />
          <p>{props.title}</p>
        </div>
      </div>
    </div>
  );
};

export default EtudeItem;
