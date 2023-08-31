import React from "react";
import Container from "./Container";

const AutresCompetences = () => {
  const competences = [
    {
      id: 1,
      content: "API REST",
    },
    {
      id: 2,
      content: "Design UI/UX",
    },
    {
      id: 3,
      content: "Applications responsives",
    },
    {
      id: 4,
      content: "Méthodologie Agile (SCRUM)",
    },
    {
      id: 5,
      content: "Gantt",
    },
    {
      id: 6,
      content: "Droits des entreprises et de l'informatique",
    },
    {
      id: 7,
      content: "Bases en management, économie, comptabilité et communication",
    },
  ];

  return (
    <Container title="Autres compétences" titleLevel="3">
      <ul className="flex flex-col items-start px-4">
        {competences.map(({ id, content }) => (
          <li key={id} className="list-disc">
            {content}
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default AutresCompetences;
