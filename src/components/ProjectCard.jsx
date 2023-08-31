import React from "react";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = (props) => {
  return (
    <div className="project-card p-6 duration-200  bg-card-color rounded-2xl min-h-[400px] hover:scale-105 shadow-md shadow-gray-900">
      <img src={props.src} alt={props.src + " card"} className="rounded-lg " />
      <div className="pt-2">
        <div className="flex flex-row align-center gap-2">
          <h1 className="text-2xl font-bold text-custom-white">
            {props.title}
          </h1>

          {props.link && (
            <a
              href={props.link}
              target="_blank"
              rel="noreferrer"
              className="flex items-center cursor-pointer duration-200"
            >
              <span className="c-blue-500 hover:scale-110 duration-200 hover:text-blue-500 text-custom-white cursor-pointer">
                <FiExternalLink size={25} />
              </span>
            </a>
          )}
        </div>
        <h2 className="text-l font-medium text-gray-400">{props.date}</h2>
        <p className="text-gray-300">{props.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
