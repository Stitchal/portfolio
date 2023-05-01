import React from "react";
import ProjectCard from "./ProjectCard";
import annuaire from "../assets/projects-img/annuaire.png";
import magasinVirtuel from "../assets/projects-img/magasinVirtuel.png";
import killBique from "../assets/projects-img/killBique.jpg";
import appliMobile from "../assets/projects-img/appliMobile.png";
import Title from "./Title";

const Projets = () => {
  const links = [
    {
      title: "Annuaire",
      date: "2023",
      link: "https://github.com/Stitchal/Annuaire",
      description:
        "Application Web permettant de gérer un annuaire d'entreprise Active Directory. Elle permet de créer, modifier, supprimer et rechercher des contacts.",
      src: annuaire,
    },
    {
      title: "Magasin Virtuel",
      date: "2023",
      link: "https://projetr301.000webhostapp.com/",
      description:
        "Création d'un site de commerce avec une base de données MySQL. Le site se décompose en deux parties : une zone publique, où le client peut consulter, ajouter, supprimer ou modifier la quantité d'un produit dans son panier, et une zone privée, où l'administrateur peut ajouter, supprimer ou modifier un produit.",
      src: magasinVirtuel,
    },
    {
      title: "Application mobile de commerce",
      date: "2023",
      link: "https://github.com/Stitchal/ApplicationMobileCommerce",
      description:
        "Application mobile de commerce développée en Java avec Android Studio. Les données sont récupérées sur une API. Le client peut consulter des produits, les ajouter au panier et passer commande via Paypal.",
      src: appliMobile,
    },
    {
      title: "Version informatisée du jeu de société Kill Bique",
      date: "2022-2023",
      description:
        "Adaptation d'un jeu de société jouable sur plusieurs ordinateurs via un protocole réseau TCP/UDP. Le jeu est développé en Java et utilise la bibliothèque graphique JavaFX.",
      src: killBique,
    },
  ];

  return (
    <div
      name="Projets"
      className="flex items-center min-h-screen w-full flex-col bg-gradient-to-r from-gray-900 to-blue-950 px-5 pt-20"
    >
      <div className="flex flex-col w-full lg:w-2/3 items-center">
        <Title title="Projets" level="4" margin="8" />
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-0">
          {links.map(({ title, date, description, src, link }) => (
            <ProjectCard
              title={title}
              date={date}
              description={description}
              src={src}
              link={link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Projets;
