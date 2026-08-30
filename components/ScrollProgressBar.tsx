'use client';
import { useScrollProgress } from '../hooks/useScrollProgress';

export default function ScrollProgressBar(): JSX.Element {
  const progress = useScrollProgress();
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '3px',
        width: `${progress}%`,
        backgroundColor: '#3B82F6',
        zIndex: 9999,
        transition: 'width 0.1s linear',
      }}
    />
  );
}
