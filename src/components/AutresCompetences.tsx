import Container from './Container';
import { autresCompetences } from '../data/autresCompetences';

const AutresCompetences = (): JSX.Element => {
  return (
    <Container title="Autres compétences" titleLevel="3">
      <ul className="flex flex-col items-start px-4">
        {autresCompetences.map(({ id, content }) => (
          <li key={id} className="list-disc">
            {content}
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default AutresCompetences;
