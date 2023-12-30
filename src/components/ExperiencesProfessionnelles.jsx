import React from "react";
import Container from "./Container";
import inriaImage from "../assets/inria.png";
import luxCartaImage from "../assets/luxcarta.jpg";
import { FiExternalLink } from "react-icons/fi";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Tooltip } from "@mui/material";

const ExperiencesProfessionnelles = () => {
  return (
    <Container title="Expériences professionnelles" titleLevel="3">
      <div className="flex flex-col gap-8">
        <div className="w-full flex gap-4 flex-col lg:flex-row ">
          <Tooltip title="https://www.luxcarta.com" placement="top">
            <a
              href="https://www.luxcarta.com/"
              className="flex h-24 w-full lg:w-24 rounded-xl shadow-md p-2 hover:scale-105 duration-200 items-center justify-center"
              target="_blank"
              rel="noreferrer"
              style={{ backgroundColor: "#1E3B66", aspectRatio: "1/1" }}
            >
              <img
                className="h-full md:h-20 lg:w-20 rounded-lg" // Ajouté des classes pour le responsive
                src={luxCartaImage}
                alt="LuxCarta"
              />
            </a>
          </Tooltip>

          <div className="w-full flex flex-col gap-2 items-column">
            <div className="flex flex-col">
              <p className="font-bold text-sm text-blue-400">
                Novembre 2023 - aujourd'hui
              </p>
              <p className="font-bold text-xl">
                Alternant DevOps / Quality Assurance
              </p>
            </div>
            <div className="flex gap-1 items-center ">
              <Tooltip title="Ouvrir dans Google Maps" placement="top">
                <LocationOnIcon fontSize="small" />
                <a
                  href="https://www.google.com/maps?sca_esv=579280459&rlz=1C1ONGR_frFR1044FR1044&output=search&q=luxcarta+technology&source=lnms&entry=mc&sa=X&ved=2ahUKEwi6i5ax4aiCAxVUaqQEHaG6CIoQ0pQJegQICxAB"
                  target="_blank"
                  className=" inline hover:underline"
                  rel="noreferrer"
                >
                  LuxCarta Technology
                  <FiExternalLink size={15} className="ml-1 inline" />
                </a>
              </Tooltip>
            </div>
            <div className="flex flex-col gap-0.5 items-column">
              <p>
                Amélioration des chaînes d'intégration continue et de
                déploiement continu.
              </p>
              <ul>
                <li>- Mise en place de nouvelles chaînes de tests.</li>
                <li>- Mise en place de rapports de tests.</li>
                <li>
                  - Écriture de tests d'intégration et de tests unitaires en
                  Python et C++
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full flex gap-4 flex-col lg:flex-row ">
          <Tooltip
            title="https://www.inria.fr/fr/centre-inria-universite-cote-azur"
            placement="top"
          >
            <a
              href="https://www.inria.fr/fr/centre-inria-universite-cote-azur"
              className="flex h-24 w-full lg:w-24 rounded-xl shadow-md p-2 hover:scale-105 duration-200 items-center justify-center"
              target="_blank"
              rel="noreferrer"
              style={{ backgroundColor: "#1E3B66", aspectRatio: "1/1" }}
            >
              <img
                className="w-24 lg:h-20 lg:w-20 rounded-lg"
                src={inriaImage}
                alt="Inria"
              />
            </a>
          </Tooltip>
          <div className="w-full flex flex-col gap-2 items-column">
            <div className="flex flex-col">
              <p className="font-bold text-sm text-gray-400">
                Avril - Juin 2023
              </p>
              <p className="font-bold text-xl">
                Stagiaire Développeur web Full-Stack
              </p>
            </div>
            <div className="flex gap-1 items-center ">
              <Tooltip title="Ouvrir dans Google Maps" placement="top">
                <LocationOnIcon fontSize="small" />
                <a
                  href="https://www.google.com/maps?sca_esv=579280459&rlz=1C1ONGR_frFR1044FR1044&output=search&q=inria+sophia+antipolis&source=lnms&entry=mc&sa=X&sqi=2&ved=2ahUKEwjTwOz-4qiCAxX-VKQEHau4DRsQ0pQJegQICRAB"
                  target="_blank"
                  className=" inline hover:underline"
                  rel="noreferrer"
                >
                  Inria Sophia Antipolis
                  <FiExternalLink size={15} className="ml-1 inline" />
                </a>
              </Tooltip>
            </div>
            <div className="flex flex-col gap-0.5 items-column">
              <div className="">
                Refonte complète de l'application web de la communauté de
                recherche scientifique mondiale basée sur la réécriture sous la
                responsabilité du Directeur de recherche{" "}
                <Tooltip
                  title="https://luigiliquori.wixsite.com/atinria"
                  placement="top"
                >
                  <a
                    href="https://luigiliquori.wixsite.com/atinria"
                    target="_blank"
                    className=" inline hover:underline text-blue-500"
                    rel="noreferrer"
                  >
                    Luigi Liquori
                    <FiExternalLink size={15} className="ml-1 inline" />
                  </a>
                </Tooltip>{" "}
                au sein de l'équipe{" "}
                <Tooltip title="https://www.inria.fr/fr/kairos" placement="top">
                  <a
                    href="https://www.inria.fr/fr/kairos"
                    target="_blank"
                    className=" inline hover:underline text-blue-500"
                    rel="noreferrer"
                  >
                    Kairos
                    <FiExternalLink size={15} className="ml-1 inline" />
                  </a>
                </Tooltip>
                <p className="inline">.</p>
              </div>
              <p>
                Régulièrement en contact avec les chercheurs de la communauté
                scientifique mondiale, j'ai pu développer mon anglais par mail
                et à l'oral.
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
      </div>
    </Container>
  );
};

export default ExperiencesProfessionnelles;
