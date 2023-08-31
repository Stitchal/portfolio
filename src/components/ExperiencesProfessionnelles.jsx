import React from "react";
import Container from "./Container";
import inriaImage from "../assets/inria.png";
import { FiExternalLink } from "react-icons/fi";

const ExperiencesProfessionnelles = () => {
  return (
    <Container title="Expériences professionnelles" titleLevel="3">
      <div className="w-full flex gap-4 flex-col lg:flex-row ">
        <a
          href="https://www.inria.fr/fr/centre-inria-universite-cote-azur"
          className="flex w-full h-32 lg:w-32 rounded-xl shadow-md p-2 hover:scale-105 duration-200 items-center justify-center"
          target="_blank"
          rel="noreferrer"
          style={{ backgroundColor: "#1E3B66" }}
        >
          <img className="object-contain" src={inriaImage} alt="Inria" />
        </a>
        <div className="w-full flex flex-col gap-2 items-column">
          <div className="flex flex-col">
            <p className="font-bold text-sm text-gray-400">Avril-juin 2023</p>
            <p className="font-bold text-xl">
              Stage à l'Inria de Sophia Antipolis
            </p>
          </div>
          <div className="flex flex-col gap-0.5 items-column">
            <div className="">
              Refonte complète de l'application web de la communauté de
              recherche scientifique mondiale basée sur la réécriture sous la
              responsabilité du Directeur de recherche{" "}
              <a
                href="https://luigiliquori.wixsite.com/atinria"
                target="_blank"
                className=" inline hover:underline text-blue-500"
                rel="noreferrer"
              >
                Luigi Liquori
                <FiExternalLink size={15} className="ml-1 inline" />
              </a>{" "}
              au sein de l'équipe{" "}
              <a
                href="https://www.inria.fr/fr/kairos"
                target="_blank"
                className=" inline hover:underline text-blue-500"
                rel="noreferrer"
              >
                Kairos
                <FiExternalLink size={15} className="ml-1 inline" />
              </a>
              <p className="inline">.</p>
            </div>
            <p>
              Régulièrement en contact avec les chercheurs de la communauté
              scientifique mondiale, j'ai pu développer mon anglais par mail et
              à l'oral.
            </p>
            Les objectifs ont été atteint et la nouvelle application web a été
            présentée lors de la conférence internationale de la FSCD à Rome.
          </div>
          <div>
            <p className="font-bold">Technologies utilisées :</p>
            <p>Front-End : React, SCSS, Material UI</p>
            <p>Back-End : Node.js, MongoDB</p>
            <p>Déploiement : Docker, Gitlab CI/CD</p>
          </div>
          <div className="flex gap-2">
            <p className="font-bold">URL : </p>
            <a
              href="https://rewriting.inria.fr/"
              target="_blank"
              className="flex gap-0.5 items-center hover:underline text-blue-500"
              rel="noreferrer"
            >
              rewriting.inria.fr
              <FiExternalLink size={15} />
            </a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ExperiencesProfessionnelles;
