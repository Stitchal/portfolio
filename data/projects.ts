import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Refonte de l'application web de la communauté de recherche scientifique mondiale de la réécriture",
    date: 'Avril-Juin 2023',
    link: 'https://rewriting.inria.fr',
    description: "Développement d'une application web pérenne et responsive avec une interface graphique pour la gestion de la base de données et l'affichage des données. Création d'une API et déploiement dans des conteneurs Docker via Gitlab CI/CD.",
    src: '/assets/projects-img/rewriting.png',
    langages: [
      { langage: 'React.js',      icon: '/assets/competences/react.png' },
      { langage: 'Material UI',   icon: '/assets/competences/mui.png' },
      { langage: 'SASS',          icon: '/assets/competences/sass.png' },
      { langage: 'Node.js',       icon: '/assets/competences/nodejs.png' },
      { langage: 'MongoDB',       icon: '/assets/competences/mongodb.png' },
      { langage: 'Docker',        icon: '/assets/competences/docker.png' },
      { langage: 'Docker Compose',icon: '/assets/competences/dockercompose.png' },
      { langage: 'Gitlab CI/CD',  icon: '/assets/competences/cicd.png' },
    ],
  },
  {
    id: 2,
    title: 'Portfolio personnel',
    date: '2023',
    link: 'https://www.alexis-rosset.fr/',
    description: "Création de mon portfolio en React.js. L'application web et responsive. L'objectif est de présenter mes projets et mes compétences. Le site est stylisé avec Tailwind.css et hébergé sur GitHub Pages.",
    src: '/assets/projects-img/portfolio.png',
    langages: [
      { langage: 'React.js',      icon: '/assets/competences/react.png' },
      { langage: 'Tailwind.css',  icon: '/assets/competences/tailwind.png' },
      { langage: 'Material UI',   icon: '/assets/competences/mui.png' },
      { langage: 'GitHub Pages',  icon: '/assets/competences/github.png' },
    ],
  },
  {
    id: 3,
    title: 'Annuaire',
    date: '2023',
    link: 'https://github.com/Stitchal/Annuaire',
    description: "Application Web permettant de gérer un annuaire d'entreprise Active Directory. L'utilisateur peut rechercher des contacts. Les membres du groupe administrateur peuvent ajouter, modifier ou supprimer des contacts.",
    src: '/assets/projects-img/annuaire.png',
    langages: [
      { langage: 'PHP',             icon: '/assets/competences/php2.png' },
      { langage: 'MySQL',           icon: '/assets/competences/mySQL.png' },
      { langage: 'Active Directory',icon: '/assets/competences/windows.png' },
    ],
  },
  {
    id: 4,
    title: 'Magasin Virtuel',
    date: '2023',
    link: 'https://projetr301.000webhostapp.com/',
    description: "Développement d'une application web de commerce avec une base de données MySQL. Le site se décompose en deux parties : une zone publique, où le client peut consulter, ajouter, supprimer ou modifier la quantité d'un produit dans son panier, et une zone privée, où l'administrateur peut ajouter, supprimer ou modifier un produit.",
    src: '/assets/projects-img/magasinVirtuel.png',
    langages: [
      { langage: 'PHP',   icon: '/assets/competences/php2.png' },
      { langage: 'MySQL', icon: '/assets/competences/mySQL.png' },
    ],
  },
  {
    id: 5,
    title: 'Application mobile de commerce',
    date: '2023',
    link: 'https://github.com/Stitchal/ApplicationMobileCommerce',
    description: "Développement d'une application mobile de commerce en Java avec Android Studio. Les données sont récupérées sur une API. Le client peut consulter des produits, les ajouter au panier et passer commande via Paypal.",
    src: '/assets/projects-img/appliMobile.png',
    langages: [
      { langage: 'Java',           icon: '/assets/competences/java.png' },
      { langage: 'Android Studio', icon: '/assets/competences/androidstudio.png' },
    ],
  },
  {
    id: 6,
    title: 'Version informatisée du jeu de société Kill Bique',
    date: '2022-2023',
    description: "Adaptation d'un jeu de société jouable sur plusieurs ordinateurs via un protocole réseau TCP/UDP. Le jeu est développé en Java et utilise la bibliothèque graphique JavaFX.",
    src: '/assets/projects-img/killBique.jpg',
    langages: [
      { langage: 'Java', icon: '/assets/competences/java.png' },
    ],
  },
  {
    id: 7,
    title: "Base de données SQL basée sur Allovoisin et création d'indicateurs PL/SQL",
    date: '2022',
    description: "Création du modèle conceptuel de la base de données en analysant le fonctionnement d'Allovoisin. Remplissage de la base de données avec des données pour la plupart aléatoires. Création d'une vingtaine d'indicateurs PL/SQL pour répondre aux besoins de l'entreprise.",
    src: '/assets/projects-img/allovoisin.png',
    langages: [
      { langage: 'Oracle SQL', icon: '/assets/competences/oracleSQL.png' },
    ],
  },
];
