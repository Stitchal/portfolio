import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { IoLogoLinkedin } from "react-icons/io5";
import { AiFillGithub } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "Accueil" },
    { id: 2, link: "Projets" },
    { id: 3, link: "À propos" },
    { id: 4, link: "Contact" },
  ];
  return (
    <div className="flex items-center h-20 px-4 text-custom-white bg-gradient-to-r from-gray-900 to-blue-950 w-full fixed z-10 gray">
      <div className="flex w-full lg:w-2/3 m-auto justify-between">
        <div className="flex flex-row gap-4 items-center">
          <h1 className="text-3xl font-signature ml-2 text-blue-500 font-bold cursor-pointer">
            <Link to="Accueil" smooth={true} duration={1000}>
              Alexis Rosset
            </Link>
          </h1>
          <a
            href="https://www.linkedin.com/in/alexis-rosset-b38869235"
            className="text-custom-white hover:text-blue-500 duration-200 cursor-pointer hover:scale-110"
            target="_blank"
            rel="noreferrer"
          >
            <IoLogoLinkedin size={30} />
          </a>
          <a
            href="https://github.com/Stitchal"
            className="text-custom-white hover:text-blue-500 duration-200 cursor-pointer hover:scale-110"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub size={30} />
          </a>
        </div>
        <ul className="hidden md:flex gap-1">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="p-2 cursor-pointer font-medium text-gray-400 hover:text-blue-500 duration-200 rounded-lg"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-blue-500 md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-r from-rgb(0, 9, 24) to-rgb(0, 17, 43) text-gray-400">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
