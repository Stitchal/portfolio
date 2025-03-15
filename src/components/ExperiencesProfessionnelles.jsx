import React from "react";
import Container from "./Container";
import inriaImage from "../assets/inria.png";
import luxCartaImage from "../assets/luxcarta.jpg";
import jmcNice from "../assets/jmc-nice.png";
import jeMed from "../assets/je-med.png";
import ExperienceItem from "./ExperienceItem";

const ExperiencesProfessionnelles = () => {
  return (
    <Container title="Expériences professionnelles" titleLevel="3">
      <div className="flex flex-col gap-8">
        <ExperienceItem
          title="Président (Associatif)"
          period="Mars 2025 - maintenant"
          company="Junior MIAGE Concept Nice"
          locationUrl="https://maps.app.goo.gl/qjhjt7X4wcNahvA7A"
          companyUrl="https://juniormiageconcept.com/"
          imageUrl={jmcNice}
          tasks={[
            "Élaboration et mise en œuvre de la stratégie globale.",
            "Représentation légale et institutionnelle de l'entreprise auprès des partenaires et des institutions.",
            "Animation des réunions et assemblées générales.",
            "Coordination des diérents pôles et alignement des projets et actions.",
          ]}
        />
        <ExperienceItem
          title="Chargé de communication (Associatif)"
          period="Juin 2024 - Mars 2025"
          company="Junior-Entreprises Méditerranée"
          imageUrl={jeMed}
        />
        <ExperienceItem
          title="Responsable Qualité (Associatif)"
          period="Février 2024 - Février 2025"
          company="Junior MIAGE Concept Nice"
          locationUrl="https://maps.app.goo.gl/qjhjt7X4wcNahvA7A"
          companyUrl="https://juniormiageconcept.com/"
          imageUrl={jmcNice}
          tasks={[
            "Surveillance des éditions et des actions de la structure au regard du cadre légal et de la déontologie.",
            "Assurrance du suivi qualité avec les clients et les intervenants.",
            "Mise à jour des documents types selon les changement légaux.",
            "Développemement du Système du Management par la Qualité (SMQ).",
            "Réflexion quotidienne d'amélioration continue.",
          ]}
        />
        <ExperienceItem
          title="Alternant DevOps / Quality Assurance"
          period="Novembre 2023 - aujourd'hui"
          company="LuxCarta Technology"
          locationUrl="https://www.google.com/maps?sca_esv=579280459&rlz=1C1ONGR_frFR1044FR1044&output=search&q=luxcarta+technology&source=lnms&entry=mc&sa=X&ved=2ahUKEwi6i5ax4aiCAxVUaqQEHaG6CIoQ0pQJegQICxAB"
          companyUrl="https://www.luxcarta.com/"
          imageUrl={luxCartaImage}
          tasks={[
            "Amélioration des chaînes d'intégration continue et de déploiement continu.",
            "Mise en place de nouvelles chaînes de tests.",
            "Mise en place de rapports de tests.",
            "Écriture de tests d'intégration et de tests unitaires en Python et C++",
          ]}
        />
        <ExperienceItem
          title="Stagiaire Développeur web Full-Stack"
          period="Avril - Juin 2023"
          company="Inria Sophia Antipolis"
          locationUrl="https://www.google.com/maps?sca_esv=579280459&rlz=1C1ONGR_frFR1044FR1044&output=search&q=inria+sophia+antipolis&source=lnms&entry=mc&sa=X&sqi=2&ved=2ahUKEwjTwOz-4qiCAxX-VKQEHau4DRsQ0pQJegQICRAB"
          companyUrl="https://www.inria.fr/fr/centre-inria-universite-cote-azur"
          imageUrl={inriaImage}
          tasks={[
            "Refonte complète de l'application web de la communauté de recherche scientifique mondiale basée sur la réécriture sous la responsabilité du Directeur de recherche Luigi Liquori au sein de l'équipe Kairos.",
            "Régulièrement en contact avec les chercheurs de la communauté scientifique mondiale, j'ai pu développer mon anglais par mail et à l'oral.",
            "Les objectifs ont été atteint et la nouvelle application web a été présentée lors de la conférence internationale de la FSCD à Rome.",
          ]}
          technologies={[
            "Front-End : React, SCSS, Material UI",
            "Back-End : Node.js, MongoDB",
            "Déploiement : Docker, Gitlab CI/CD",
          ]}
          url="https://rewriting.inria.fr/"
        />
      </div>
    </Container>
  );
};

export default ExperiencesProfessionnelles;
