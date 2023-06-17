import React from "react";
import Container from "./Container";
import inriaImage from "../assets/inria.png";

const ExperiencesProfessionnelles = () => {
  return (
    <Container title="Expériences professionnelles" titleLevel="3">
      <div className="w-full flex gap-4 items-center flex-col md:flex-row">
        <a
          href="https://www.inria.fr/fr/centre-inria-universite-cote-azur"
          className="flex w-48 bg-blue-900 rounded-2xl shadow-md p-2 hover:scale-105 duration-200"
          target="_blank"
          rel="noreferrer"
        >
          <img src={inriaImage} alt="Inria" />
        </a>
        <div>
          <p className="font-bold">Avril-juin 2023</p>
          <p className="font-bold">Stage à l'Inria de Sophia Antipolis</p>
          <p>
            Refonte de l'application web d'une communauté de recherche
            scientifique
            <a
              href="http://rewriting.inria.fr/"
              target="_blank"
              className="hover:underline text-blue-500"
              rel="noreferrer"
            >
              http://rewriting.inria.fr/
            </a>
            , en utilisant React, Node.js, MongoDB et Docker. L'objectif est de
            créer une application facilement maintenable et pérenne, avec une
            interface graphique pour gérer la base de données et afficher les
            données actualisées. Le cahier des charges sera régulièrement mis à
            jour, compte tenu des échanges par e-mail et des visioconférences.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default ExperiencesProfessionnelles;
