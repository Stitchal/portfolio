
import React from "react";
import { FiExternalLink } from "react-icons/fi";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Tooltip } from "@mui/material";

const ExperienceItem = ({
  title,
  period,
  company,
  locationUrl,
  companyUrl,
  imageUrl,
  tasks,
  technologies,
  url,
}) => {
  return (
    <div className="w-full flex gap-4 flex-col lg:flex-row ">
      <Tooltip title={companyUrl} placement="top">
        <a
          href={companyUrl}
          className="flex h-24 w-full lg:w-24 rounded-xl shadow-md p-2 hover:scale-105 duration-200 items-center justify-center"
          target="_blank"
          rel="noreferrer"
          style={{ backgroundColor: "#1E3B66", aspectRatio: "1/1" }}
        >
          <img
            className="h-full md:h-20 lg:w-20 rounded-lg"
            src={imageUrl}
            alt={company}
          />
        </a>
      </Tooltip>
      <div className="w-full flex flex-col gap-2 items-column">
        <div className="flex flex-col">
          <p className="font-bold text-sm text-blue-400">{period}</p>
          <p className="font-bold text-xl">{title}</p>
        </div>
        <div className="flex gap-1 items-center ">
          <Tooltip title="Ouvrir dans Google Maps" placement="top">
            <LocationOnIcon fontSize="small" />
            <a
              href={locationUrl}
              target="_blank"
              className=" inline hover:underline"
              rel="noreferrer"
            >
              {company}
              <FiExternalLink size={15} className="ml-1 inline" />
            </a>
          </Tooltip>
        </div>
        <div className="flex flex-col gap-0.5 items-column">
          {tasks && (
            <ul>
              {tasks.map((task, index) => (
                <li key={index}>- {task}</li>
              ))}
            </ul>
          )}
          {technologies && (
            <div>
              <p className="font-bold">Technologies utilisées :</p>
              {technologies.map((tech, index) => (
                <p key={index}>{tech}</p>
              ))}
            </div>
          )}
          {url && (
            <div className="flex gap-2">
              <p className="font-bold">URL : </p>
              <a
                href={url}
                target="_blank"
                className="flex gap-0.5 items-center hover:underline text-blue-500"
                rel="noreferrer"
              >
                {url}
                <FiExternalLink size={15} />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;