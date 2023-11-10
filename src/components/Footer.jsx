import React from "react";
import { IoLogoLinkedin } from "react-icons/io5";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="flex items-center justify-center bg-gradient-to-r from-background-color to-container-bg text-custom-white ">
      <div className="flex items-center justify-center w-full gap-2 py-8 border-blue-500 border-t 2xl:w-2/3 flex-col mx-4 lg:px-0">
        <p>Développé par Alexis Rosset - Tous droits réservés © - 2023</p>
        <div className="flex flex-row gap-2">
          <a
            href="https://www.linkedin.com/in/alexisrosset/"
            target="_blank"
            rel="noreferrer"
          >
            <IoLogoLinkedin
              className="text-custom-white hover:text-blue-500 transition duration-300 hover:scale-110"
              size={24}
            />
          </a>
          <a
            href="https://github.com/Stitchal"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub
              className="text-custom-white hover:text-blue-500 transition duration-300 hover:scale-110"
              size={24}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
