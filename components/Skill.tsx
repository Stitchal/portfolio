interface SkillProps {
  src: string;
  title: string;
  link: string;
  extraClassName?: string;
}

export default function Skill({ src, title, link, extraClassName }: SkillProps): JSX.Element {
  return (
    <div className={'duration-500 py-2 rounded-lg cursor-pointer hover:scale-125 ' + (extraClassName ?? '')}>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={src} alt={title} className="mx-auto w-14" />
      </a>
    </div>
  );
}
