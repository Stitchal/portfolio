import React from "react";
import ProjectCard from "./ProjectCard";
import annuaire from "../assets/projects-img/annuaire.png";
import magasinVirtuel from "../assets/projects-img/magasinVirtuel.png";
import killBique from "../assets/projects-img/killBique.jpg";
import appliMobile from "../assets/projects-img/appliMobile.png";
import rewriting from "../assets/projects-img/rewriting.png";
import portfolio from "../assets/projects-img/portfolio.png";
import allovoisin from "../assets/projects-img/allovoisin.png";
import Title from "./Title";

const Projets = () => {
  const links = [
    {
      id: 1,
      title:
        "Refonte de l'application web de la communauté de recherche scientifique mondiale de la réécriture",
      date: "Avril-Juin 2023",
      link: "https://rewriting.inria.fr/",
      description:
        "Refonte complète de l'application web de la communauté de recherche scientifique mondiale basée sur la réécriture. L'objectif est de créer une application facilement maintenable, pérenne et responsive, avec une interface graphique pour gérer la base de données et afficher les données actualisées. Création d'une API et dépoiement dans des conteneurs Docker à travers la CI/CD de Gitlab.",
      src: rewriting,
    },
    {
      id: 2,
      title: "Portfolio personnel",
      date: "2023",link: "https://rewriting.inria.fr/",
      description:
        "Création de mon portfolio en React.js. Le site web et responsive. L'objectif est de présenter mes projets et mes compétences. Stylisé avec Tailwind.css et hébergé sur GitHub Pages.",
      src: portfolio,
    },
    {
      id: 3,
      title: "Annuaire",
      date: "2023",
      link: "https://github.com/Stitchal/Annuaire",
      description:
        "Application Web permettant de gérer un annuaire d'entreprise Active Directory. L'utilisateur peut rechercher des contacts. Les membres du groupe administrateur peuvent ajouter, modifier ou supprimer des contacts.",
      src: annuaire,
    },
    {
      id: 4,
      title: "Magasin Virtuel",
      date: "2023",
      link: "https://projetr301.000webhostapp.com/",
      description:
        "Création d'un site de commerce avec une base de données MySQL. Le site se décompose en deux parties : une zone publique, où le client peut consulter, ajouter, supprimer ou modifier la quantité d'un produit dans son panier, et une zone privée, où l'administrateur peut ajouter, supprimer ou modifier un produit.",
      src: magasinVirtuel,
    },
    {
      id: 5,
      title: "Application mobile de commerce",
      date: "2023",
      link: "https://github.com/Stitchal/ApplicationMobileCommerce",
      description:
        "Application mobile de commerce développée en Java avec Android Studio. Les données sont récupérées sur une API. Le client peut consulter des produits, les ajouter au panier et passer commande via Paypal.",
      src: appliMobile,
    },
    {
      id: 6,
      title: "Version informatisée du jeu de société Kill Bique",
      date: "2022-2023",
      description:
        "Adaptation d'un jeu de société jouable sur plusieurs ordinateurs via un protocole réseau TCP/UDP. Le jeu est développé en Java et utilise la bibliothèque graphique JavaFX.",
      src: killBique,
    },
    {
      id: 7,
      title:
        "Base de données SQL basée sur Allovoisin et création d'indicateurs PL/SQL",
      date: "2022",
      description:
        "Création du modèle conceptuel de la base de données en analysant le fonctionnement d'Allovoisin. Remplissage de la base de données avec des données pour la plupart aléatoires. Création d'une vingtaine d'indicateurs PL/SQL pour répondre aux besoins de l'entreprise.",
      src: allovoisin,
    },
  ];

  return (
    <div
      name="Projets"
      className="flex items-center min-h-screen w-full flex-col bg-gradient-to-r from-background-color to-container-bg px-5 pt-20"
    >
      <div className="flex flex-col w-full 2xl:w-2/3 items-center">
        <Title title="Projets" level="4" margin="8" />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 sm:px-0 mt-4">
          {links.map(({ id, title, date, description, src, link }) => (
            <ProjectCard
              key={id}
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
