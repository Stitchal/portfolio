import Title from '../components/Title';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import { Element } from 'react-scroll';

const ProjetsPage = (): JSX.Element => {
  return (
    <Element
      name="Projets"
      className="flex items-center min-h-screen w-full flex-col bg-gradient-to-r from-background-color to-container-bg px-5 pt-20"
    >
      <div className="flex flex-col w-full 2xl:w-2/3 items-center">
        <Title title="Projets" level="4" margin="8" />
        <div className="grid md:grid-cols-2 3xl:grid-cols-3 gap-8 sm:px-0 mt-4">
          {projects.map(({ id, title, date, description, src, link, langages }) => (
            <ProjectCard
              key={id}
              title={title}
              date={date}
              description={description}
              src={src}
              link={link}
              langages={langages}
            />
          ))}
        </div>
      </div>
    </Element>
  );
};

export default ProjetsPage;
