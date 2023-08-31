import React from "react";
import Container from "./Container";
import iutImage from "../assets/iut.png";
import universiteCoteDazurImage from "../assets/universiteCoteDazur.png";
import EtudeItem from "./EtudeItem";

const Etudes = () => {
  return (
    <Container title="Études" titleLevel="3">
      <div className="flex flex-col gap-4">
        <EtudeItem
          link="https://iut.univ-cotedazur.fr/"
          title="Université de Nice Sophia Antipolis"
          name="Licence 3 MIAGE"
          year="2023-2024"
          image={universiteCoteDazurImage}
        />
        <EtudeItem
          link="https://iut.univ-cotedazur.fr/"
          title="IUT Nice Côte d'Azur"
          name="DUT Informatique"
          year="2021-2023"
          image={iutImage}
        />
      </div>
    </Container>
  );
};

export default Etudes;
