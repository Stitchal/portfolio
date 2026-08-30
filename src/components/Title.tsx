interface TitleProps {
  title: string;
  level: '1' | '2' | '3' | '4' | '5' | '6';
  margin?: string;
}

const Title = ({ title, level, margin }: TitleProps): JSX.Element => {
  return (
    <div className={'flex flex-col gap-2 w-full'}>
      <h1 className={'flex text-' + level + 'xl font-bold text-custom-white'}>
        {title}
      </h1>
      {level === '4' && (
        <div className="bg-blue-500 w-12 h-3 rounded-sm text-4xl"></div>
      )}
    </div>
  );
};

export default Title;
