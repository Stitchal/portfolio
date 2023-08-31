import React from "react";
import Title from "./Title";
import Competences from "./Competences";
import Etudes from "./Etudes";
import ExperiencesProfessionnelles from "./ExperiencesProfessionnelles";
import AutresCompetences from "./AutresCompetences";

const APropos = () => {
  return (
    <div
      name="À propos"
      className="flex items-center min-h-screen w-full flex-col bg-gradient-to-r from-background-color to-container-bg px-5 pt-20"
    >
      <div className="flex flex-col w-full 2xl:w-2/3 items-center">
        <Title title="À propos" level="4" />
        <div className="flex flex-col gap-12 w-full mt-4">
          <Competences />
          <AutresCompetences />
          <Etudes />
          <ExperiencesProfessionnelles />
        </div>
      </div>
    </div>
  );
};

export default APropos;
