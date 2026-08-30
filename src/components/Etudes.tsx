import Container from './Container';
import EtudeItem from './EtudeItem';
import { etudes } from '../data/etudes';

const Etudes = (): JSX.Element => {
  return (
    <Container title="Études" titleLevel="3">
      <div className="flex flex-col gap-4">
        {etudes.map((etude) => (
          <EtudeItem key={etude.id} {...etude} />
        ))}
      </div>
    </Container>
  );
};

export default Etudes;
