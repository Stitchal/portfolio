import Container from './Container';
import ExperienceItem from './ExperienceItem';
import { experiences } from '../data/experiences';

export default function ExperiencesProfessionnelles(): JSX.Element {
  return (
    <Container title="Expériences professionnelles" titleLevel="3">
      <div className="flex flex-col gap-8">
        {experiences.map((exp) => (
          <ExperienceItem key={exp.id} {...exp} />
        ))}
      </div>
    </Container>
  );
}
