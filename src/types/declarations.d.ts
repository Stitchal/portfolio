// react-animations has no @types package
declare module 'react-animations' {
  export const bounce: string;
  export const flash: string;
  export const pulse: string;
  export const rubberBand: string;
  export const shake: string;
  export const swing: string;
  export const tada: string;
  export const wobble: string;
  export const jello: string;
}

// react-scroll-progress-bar has no @types package
declare module 'react-scroll-progress-bar' {
  import { FC } from 'react';
  interface ScrollProgressBarProps {
    height?: string;
    bgcolor?: string;
    duration?: string;
  }
  const ScrollProgressBar: FC<ScrollProgressBarProps>;
  export default ScrollProgressBar;
}

declare module '*.png' {
  const src: string;
  export default src;
}
declare module '*.jpg' {
  const src: string;
  export default src;
}
declare module '*.jpeg' {
  const src: string;
  export default src;
}
declare module '*.svg' {
  const src: string;
  export default src;
}
declare module '*.pdf' {
  const src: string;
  export default src;
}
declare module '*.ico' {
  const src: string;
  export default src;
}
