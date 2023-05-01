import React from "react";
import profileImage from "../assets/profile.png";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import styled, { keyframes } from "styled-components";
import { bounce } from "react-animations";

const Accueil = () => {
  const Bounce = styled.div`
    animation: 7s ${keyframes`${bounce}`} infinite;
  `;

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div
      name="Accueil"
      className="flex justify-center items-center h-screen w-full bg-gradient-to-r from-gray-900 to-blue-950 px-5 flex-col"
    >
      <motion.div
        className="flex flex-col lg:w-2/3 items-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <div className="flex md:flex-row flex-col lg:items-center gap-10">
          <div>
            <motion.h1
              className="text-custom-white lg:text-6xl text-4xl font-bold item"
              variants={item}
            >
              Bonjour ! Je suis{" "}
              <span className="text-blue-500">Alexis Rosset</span>,
            </motion.h1>
            <motion.p
              className="flex text-custom-white text-2xl lg:text-4xl item"
              variants={item}
            >
              Étudiant en deuxième année de BUT Informatique passionné par le
              développement web et la musique.
            </motion.p>
          </div>
          <motion.div class="item" variants={item}>
            <img
              src={profileImage}
              alt="Alexis Rosset img"
              className=" mx-auto max-w-2xl hover:scale-110 duration-500 border-4 border-blue-500 rounded-full"
            />
          </motion.div>
        </div>
        <motion.div className="item mt-16 absolute bottom-2" variants={item}>
          <Bounce>
            <Link
              to="Projets"
              className="flex text-custom-white bg-blue-500 cursor-pointer w-fit md:p-2 p-4 lg:mt-0 duration-500 rounded-full hover:scale-125"
              smooth
              duration={750}
            >
              <MdOutlineKeyboardArrowDown size={50} />
            </Link>
          </Bounce>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Accueil;
