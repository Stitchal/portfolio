import React from "react";
import profileImage from "../assets/profile.png";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import styled, { keyframes } from "styled-components";
import { bounce } from "react-animations";

const AccueilPage = () => {
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
      className="flex sm:justify-center items-center h-screen w-full bg-gradient-to-r px-5 flex-col from-background-color to-container-bg"
    >
      <motion.div
        className="flex flex-col 2xl:w-2/3 items-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <div className="flex justify-center md:flex-row flex-wrap-reverse md:flex-nowrap lg:items-center gap-10 mt-20 lg:mt-0">
          <div className="flex flex-col gap-2">
            <motion.h1
              className="text-custom-white lg:text-6xl text-3xl font-bold pb-2"
              variants={item}
            >
              Bonjour ! Je suis{" "}
              <span className="text-blue-500">Alexis Rosset</span>,
            </motion.h1>
            <motion.p
              className=" text-custom-white text-xl lg:text-3xl item"
              variants={item}
            >
              <span className="text-blue-400">Président</span>{" "}
              de{" "}
              <span className="text-blue-400 hover:underline">
                <a
                  href="https://juniormiageconcept.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Junior MIAGE Concept Nice
                </a>
              </span>
              .
            </motion.p>
            <motion.p
              className=" text-custom-white text-xl lg:text-3xl item"
              variants={item}
            >
              <span className="text-blue-400">Alternant DevOps / QA</span> chez{" "}
              <span className="text-blue-400 hover:underline">
                <a
                  href="https://www.luxcarta.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LuxCarta Technology
                </a>
              </span>
              .
            </motion.p>
            <motion.p
              className="text-custom-white text-xl lg:text-3xl item"
              variants={item}
            >
              <span className="text-blue-400"> Étudiant </span> en Master 1{" "}
              <span className="text-blue-400 hover:underline">
                <a
                  href="https://univ-cotedazur.fr/miage"
                  target="_blank"
                  rel="noreferrer"
                >
                  MIAGE
                </a>
              </span>{" "}
              passionné par l'informatique et la musique.
            </motion.p>
          </div>
          <motion.div className="item" variants={item}>
            <img
              src={profileImage}
              alt="Alexis Rosset img"
              className=" mx-auto max-w-2xl hover:scale-110 duration-500 rounded-full border-blue-800 border-4 w-48 h-48"
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

export default AccueilPage;
