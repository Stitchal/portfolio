import { ReactNode } from 'react';
import Title from './Title';

interface ContainerProps {
  title: string;
  titleLevel: '1' | '2' | '3' | '4' | '5' | '6';
  children: ReactNode;
}

const Container = ({ title, titleLevel, children }: ContainerProps): JSX.Element => {
  return (
    <div className="flex flex-col w-full bg-container-bg rounded-2xl shadow-md shadow-gray-900 gap-4">
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-t-2xl p-4">
        <Title title={title} level={titleLevel} margin="0" />
      </div>
      <div className="p-4 text-custom-white">{children}</div>
    </div>
  );
};

export default Container;
