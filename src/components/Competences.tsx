import Container from './Container';
import Skill from './Skill';
import Title from './Title';
import { skillCategories } from '../data/competences';

const Competences = (): JSX.Element => {
  return (
    <Container title="Compétences" titleLevel="3">
      <div className="flex flex-col gap-4">
        {skillCategories.map((category) => (
          <div key={category.categoryName} className="flex flex-wrap gap-1 items-center">
            <Title title={category.categoryName} level="2" />
            <div className="flex flex-wrap gap-4 items-center">
              {category.skills.map(({ id, src, title, link }) => (
                <div key={id} className="flex flex-col items-center">
                  <Skill src={src} title={title} link={link} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Competences;
