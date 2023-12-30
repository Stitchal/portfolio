import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { FiExternalLink } from "react-icons/fi";
import { Tooltip } from "@mui/material";

const EtudeItem = (props) => {
  return (
    <div className="w-full flex gap-4 ">
      <a
        href={props.link}
        className="flex w-24 h-24 bg-white rounded-xl shadow-md p-2 hover:scale-105 duration-200"
        style={{ backgroundColor: "#1E3B66", aspectRatio: "1/1" }}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={props.image}
          alt={props.title}
          className="w-full h-full object-contain rounded-lg"
        />
      </a>
      <div className="w-64 sm:w-full">
        {props.actual ? (
          <p className="font-bold text-sm text-blue-400">{props.year}</p>
        ) : (
          <p className="font-bold text-sm">{props.year}</p>
        )}
        <p className="font-bold text-lg">{props.name}</p>
        <div className="flex gap-1 items-center ">
          <LocationOnIcon fontSize="small" />
          <Tooltip title="Ouvrir dans Google Maps" placement="top">
            <a
              href={props.location}
              target="_blank"
              className=" inline hover:underline"
              rel="noreferrer"
            >
              {props.title}
              <FiExternalLink size={15} className="ml-1 inline" />
            </a>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default EtudeItem;
