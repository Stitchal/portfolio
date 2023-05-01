import React from "react";
import Container from "./Container";
import iutImage from "../assets/iut.png";

const Etudes = () => {
  return (
    <Container title="Études" titleLevel="3">
      <div className="w-full flex gap-4 ">
        <a
          href="https://iut.univ-cotedazur.fr/"
          className="flex w-32 bg-blue-900 rounded-2xl shadow-md p-2 hover:scale-105 duration-200"
          target="_blank"
          rel="noreferrer"
        >
          <img src={iutImage} alt="IUT Nice Côte d'Azur" />
        </a>
        <div>
          <p className="font-bold">2022-2023</p>
          <p className="font-bold">BUT Informatique 2ᵉ année</p>
          <p>IUT Nice Côte d'Azur</p>
        </div>
      </div>
    </Container>
  );
};

export default Etudes;
