import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    categoryName: 'Front-End',
    skills: [
      { id: 4,  src: '/assets/competences/react.png',      title: 'React',        link: 'https://react.dev/' },
      { id: 3,  src: '/assets/competences/javascript.png', title: 'Javascript',   link: 'https://developer.mozilla.org/fr/docs/Web/JavaScript' },
      { id: 1,  src: '/assets/competences/html.png',       title: 'HTML',         link: 'https://developer.mozilla.org/fr/docs/Web/HTML' },
      { id: 5,  src: '/assets/competences/tailwind.png',   title: 'Tailwind',     link: 'https://tailwindcss.com/' },
      { id: 24, src: '/assets/competences/mui.png',        title: 'Material UI',  link: 'https://mui.com/' },
      { id: 2,  src: '/assets/competences/css.png',        title: 'CSS',          link: 'https://developer.mozilla.org/fr/docs/Web/CSS' },
      { id: 23, src: '/assets/competences/sass.png',       title: 'SASS',         link: 'https://sass-lang.com/' },
    ],
  },
  {
    categoryName: 'Back-End',
    skills: [
      { id: 6,  src: '/assets/competences/java.png',       title: 'Java',         link: 'https://www.oracle.com/fr/java/' },
      { id: 7,  src: '/assets/competences/php.png',        title: 'PHP',          link: 'https://www.php.net/' },
      { id: 8,  src: '/assets/competences/nodejs.png',     title: 'NodeJS',       link: 'https://nodejs.org/fr' },
      { id: 9,  src: '/assets/competences/c.png',          title: 'C',            link: 'https://www.iso.org/standard/74528.html' },
      { id: 10, src: '/assets/competences/python.png',     title: 'Python',       link: 'https://www.python.org/' },
    ],
  },
  {
    categoryName: 'Base de données',
    skills: [
      { id: 11, src: '/assets/competences/oracleSQL.png',  title: 'Oracle SQL',   link: 'https://www.oracle.com/fr/database/technologies/appdev/sql.html' },
      { id: 12, src: '/assets/competences/mongodb.png',    title: 'MongoDB',      link: 'https://www.mongodb.com/' },
      { id: 13, src: '/assets/competences/mySQL.png',      title: 'MySQL',        link: 'https://www.mysql.com/' },
    ],
  },
  {
    categoryName: 'DevOps',
    skills: [
      { id: 16, src: '/assets/competences/git.png',        title: 'Git',          link: 'https://git-scm.com/' },
      { id: 17, src: '/assets/competences/github.png',     title: 'Github',       link: 'https://github.com/' },
      { id: 18, src: '/assets/competences/gitlab.png',     title: 'Gitlab',       link: 'https://gitlab.com/' },
      { id: 19, src: '/assets/competences/cicd.png',       title: 'CI/CD',        link: 'https://docs.gitlab.com/ee/ci/' },
      { id: 20, src: '/assets/competences/docker.png',     title: 'Docker',       link: 'https://www.docker.com/' },
    ],
  },
  {
    categoryName: "Systèmes d'exploitation",
    skills: [
      { id: 14, src: '/assets/competences/windows.png',    title: 'Windows',      link: 'https://www.microsoft.com/fr-fr/windows' },
      { id: 15, src: '/assets/competences/ubuntu.png',     title: 'Ubuntu',       link: 'https://www.ubuntu-fr.org/' },
    ],
  },
  {
    categoryName: 'IDE',
    skills: [
      { id: 21, src: '/assets/competences/vscode.png',     title: 'Visual Studio Code', link: 'https://code.visualstudio.com/' },
      { id: 22, src: '/assets/competences/jetbrains.png',  title: 'Jetbrain IDEs',      link: 'https://www.jetbrains.com/fr-fr/products/' },
    ],
  },
];
