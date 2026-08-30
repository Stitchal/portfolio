'use client';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IoLogoLinkedin } from 'react-icons/io5';
import { AiFillGithub } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { navLinks } from '../data/navLinks';
import { scrollToSection } from '../lib/smoothScroll';

export default function Navbar(): JSX.Element {
  const [nav, setNav] = useState(false);

  return (
    <div className="flex items-center h-20 px-4 text-custom-white bg-gradient-to-r w-full fixed z-10 from-background-color to-container-bg">
      <div className="flex w-full 2xl:w-2/3 m-auto justify-between">
        <div className="flex flex-row gap-4 items-center">
          <h1 className="text-3xl font-signature ml-2 text-blue-500 font-bold cursor-pointer">
            <button onClick={() => scrollToSection('accueil')}>Alexis Rosset</button>
          </h1>
          <a href="https://www.linkedin.com/in/alexis-rosset-b38869235" className="text-custom-white hover:text-blue-500 duration-200 cursor-pointer hover:scale-110" target="_blank" rel="noreferrer">
            <IoLogoLinkedin size={30} />
          </a>
          <a href="https://github.com/Stitchal" className="text-custom-white hover:text-blue-500 duration-200 cursor-pointer hover:scale-110" target="_blank" rel="noreferrer">
            <AiFillGithub size={30} />
          </a>
        </div>

        <ul className="hidden md:flex gap-1">
          {navLinks.map(({ id, link, slug }) => (
            <li key={id} className="p-2 cursor-pointer font-medium text-gray-300 hover:text-blue-500 duration-200 rounded-lg">
              <button onClick={() => scrollToSection(slug)}>{link}</button>
            </li>
          ))}
          <li className="p-2 cursor-pointer font-medium text-gray-300 hover:text-blue-500 duration-200 rounded-lg">
            <a href="/assets/CV-ALEXIS-ROSSET.pdf" target="_blank" rel="noreferrer" className="flex flex-row items-center gap-1 justify-center">
              CV <div className="pb-1"><FiExternalLink size={20} /></div>
            </a>
          </li>
        </ul>

        <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-blue-500 md:hidden">
          {nav ? (
            <motion.button whileHover={{ scale: 1 }} whileTap={{ scale: 0.9 }}><FaTimes size={30} /></motion.button>
          ) : (
            <motion.button whileHover={{ scale: 1 }} whileTap={{ scale: 0.9 }}><FaBars size={30} /></motion.button>
          )}
        </div>

        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen text-custom-white bg-container-bg">
            {navLinks.map(({ id, link, slug }) => (
              <li key={id} className="px-4 cursor-pointer py-6 text-2xl">
                <button onClick={() => { scrollToSection(slug); setNav(false); }}>{link}</button>
              </li>
            ))}
            <li className="px-4 cursor-pointer capitalize py-6 text-2xl">
              <a href="/assets/CV-ALEXIS-ROSSET.pdf" onClick={() => setNav(false)} target="_blank" rel="noreferrer" className="flex flex-row items-center gap-2">
                CV <div className="pb-1"><FiExternalLink size={30} /></div>
              </a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
