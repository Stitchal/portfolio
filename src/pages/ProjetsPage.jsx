import React from "react";

import ProjectCard from "../components/ProjectCard";
import annuaire from "../assets/projects-img/annuaire.png";
import magasinVirtuel from "../assets/projects-img/magasinVirtuel.png";
import killBique from "../assets/projects-img/killBique.jpg";
import appliMobile from "../assets/projects-img/appliMobile.png";
import rewriting from "../assets/projects-img/rewriting.png";
import portfolio from "../assets/projects-img/portfolio.png";
import allovoisin from "../assets/projects-img/allovoisin.png";
import Title from "../components/Title";

import docker from "../assets/competences/docker.png";
import dockercompose from "../assets/competences/dockercompose.png";
import react from "../assets/competences/react.png";
import nodejs from "../assets/competences/nodejs.png";
import mongodb from "../assets/competences/mongodb.png";
import cicd from "../assets/competences/cicd.png";
import tailwind from "../assets/competences/tailwind.png";
import php from "../assets/competences/php2.png";
import java from "../assets/competences/java.png";
import mySQL from "../assets/competences/mySQL.png";
import oracleSQL from "../assets/competences/oracleSQL.png";
import windows from "../assets/competences/windows.png";
import mui from "../assets/competences/mui.png";
import sass from "../assets/competences/sass.png";
import github from "../assets/competences/github.png";
import androidstudio from "../assets/competences/androidstudio.png";

const ProjetsPage = () => {
  const links = [
    {
      id: 1,
      title:
        "Refonte de l'application web de la communauté de recherche scientifique mondiale de la réécriture",
      date: "Avril-Juin 2023",
      link: "https://rewriting.inria.fr",
      description:
        "Développement d'une application web pérenne et responsive avec une interface graphique pour la gestion de la base de données et l'affichage des données. Création d'une API et déploiement dans des conteneurs Docker via Gitlab CI/CD.",
      src: rewriting,
      langages: [
        { langage: "React.js", icon: react },
        { langage: "Material UI", icon: mui },
        { langage: "SASS", icon: sass },
        { langage: "Node.js", icon: nodejs },
        { langage: "MongoDB", icon: mongodb },
        { langage: "Docker", icon: docker },
        { langage: "Docker Compose", icon: dockercompose },
        { langage: "Gitlab CI/CD", icon: cicd },
      ],
    },
    {
      id: 2,
      title: "Portfolio personnel",
      date: "2023",
      link: "https://www.alexis-rosset.fr/",
      description:
        "Création de mon portfolio en React.js. L'application web et responsive. L'objectif est de présenter mes projets et mes compétences. Le site est stylisé avec Tailwind.css et hébergé sur GitHub Pages.",
      src: portfolio,
      langages: [
        { langage: "React.js", icon: react },
        { langage: "Tailwind.css", icon: tailwind },
        { langage: "Material UI", icon: mui },
        { langage: "GitHub Pages", icon: github },
      ],
    },
    {
      id: 3,
      title: "Annuaire",
      date: "2023",
      link: "https://github.com/Stitchal/Annuaire",
      description:
        "Application Web permettant de gérer un annuaire d'entreprise Active Directory. L'utilisateur peut rechercher des contacts. Les membres du groupe administrateur peuvent ajouter, modifier ou supprimer des contacts.",
      src: annuaire,
      langages: [
        { langage: "PHP", icon: php },
        { langage: "MySQL", icon: mySQL },
        { langage: "Active Directory", icon: windows },
      ],
    },
    {
      id: 4,
      title: "Magasin Virtuel",
      date: "2023",
      link: "https://projetr301.000webhostapp.com/",
      description:
        "Développement d'une application web de commerce avec une base de données MySQL. Le site se décompose en deux parties : une zone publique, où le client peut consulter, ajouter, supprimer ou modifier la quantité d'un produit dans son panier, et une zone privée, où l'administrateur peut ajouter, supprimer ou modifier un produit.",
      src: magasinVirtuel,
      langages: [
        { langage: "PHP", icon: php },
        { langage: "MySQL", icon: mySQL },
      ],
    },
    {
      id: 5,
      title: "Application mobile de commerce",
      date: "2023",
      link: "https://github.com/Stitchal/ApplicationMobileCommerce",
      description:
        "Développement d'une application mobile de commerce en Java avec Android Studio. Les données sont récupérées sur une API. Le client peut consulter des produits, les ajouter au panier et passer commande via Paypal.",
      src: appliMobile,
      langages: [
        { langage: "Java", icon: java },
        { langage: "Android Studio", icon: androidstudio },
      ],
    },
    {
      id: 6,
      title: "Version informatisée du jeu de société Kill Bique",
      date: "2022-2023",
      description:
        "Adaptation d'un jeu de société jouable sur plusieurs ordinateurs via un protocole réseau TCP/UDP. Le jeu est développé en Java et utilise la bibliothèque graphique JavaFX.",
      src: killBique,
      langages: [{ langage: "Java", icon: java }],
    },
    {
      id: 7,
      title:
        "Base de données SQL basée sur Allovoisin et création d'indicateurs PL/SQL",
      date: "2022",
      description:
        "Création du modèle conceptuel de la base de données en analysant le fonctionnement d'Allovoisin. Remplissage de la base de données avec des données pour la plupart aléatoires. Création d'une vingtaine d'indicateurs PL/SQL pour répondre aux besoins de l'entreprise.",
      src: allovoisin,
      langages: [{ langage: "Oracle SQL", icon: oracleSQL }],
    },
  ];

  return (
    <div
      name="Projets"
      className="flex items-center min-h-screen w-full flex-col bg-gradient-to-r from-background-color to-container-bg px-5 pt-20"
    >
      <div className="flex flex-col w-full 2xl:w-2/3 items-center">
        <Title title="Projets" level="4" margin="8" />
        <div className="grid md:grid-cols-2 3xl:grid-cols-3 gap-8 sm:px-0 mt-4">
          {links.map(
            ({ id, title, date, description, src, link, langages }) => (
              <ProjectCard
                key={id}
                title={title}
                date={date}
                description={description}
                src={src}
                link={link}
                langages={langages}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};
export default ProjetsPage;
