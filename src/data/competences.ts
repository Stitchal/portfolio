import { SkillCategory } from '../types';

import cImage from '../assets/competences/c.png';
import cssImage from '../assets/competences/css.png';
import gitImage from '../assets/competences/git.png';
import githubImage from '../assets/competences/github.png';
import gitlabImage from '../assets/competences/gitlab.png';
import htmlImage from '../assets/competences/html.png';
import javaImage from '../assets/competences/java.png';
import javascriptImage from '../assets/competences/javascript.png';
import mongodbImage from '../assets/competences/mongodb.png';
import oracleSQLImage from '../assets/competences/oracleSQL.png';
import nodejsImage from '../assets/competences/nodejs.png';
import phpImage from '../assets/competences/php.png';
import reactImage from '../assets/competences/react.png';
import tailwindImage from '../assets/competences/tailwind.png';
import sassImage from '../assets/competences/sass.png';
import materialUI from '../assets/competences/mui.png';
import windowsImage from '../assets/competences/windows.png';
import ubuntuImage from '../assets/competences/ubuntu.png';
import dockerImage from '../assets/competences/docker.png';
import vscodeImage from '../assets/competences/vscode.png';
import jetbrainsImage from '../assets/competences/jetbrains.png';
import pythonImage from '../assets/competences/python.png';
import mysqlImage from '../assets/competences/mySQL.png';
import cicd from '../assets/competences/cicd.png';

export const skillCategories: SkillCategory[] = [
  {
    categoryName: 'Front-End',
    skills: [
      { id: 4, src: reactImage, title: 'React', link: 'https://react.dev/' },
      { id: 3, src: javascriptImage, title: 'Javascript', link: 'https://developer.mozilla.org/fr/docs/Web/JavaScript' },
      { id: 1, src: htmlImage, title: 'HTML', link: 'https://developer.mozilla.org/fr/docs/Web/HTML' },
      { id: 5, src: tailwindImage, title: 'Tailwind', link: 'https://tailwindcss.com/' },
      { id: 24, src: materialUI, title: 'Material UI', link: 'https://mui.com/' },
      { id: 2, src: cssImage, title: 'CSS', link: 'https://developer.mozilla.org/fr/docs/Web/CSS' },
      { id: 23, src: sassImage, title: 'SASS', link: 'https://sass-lang.com/' },
    ],
  },
  {
    categoryName: 'Back-End',
    skills: [
      { id: 6, src: javaImage, title: 'Java', link: 'https://www.oracle.com/fr/java/' },
      { id: 7, src: phpImage, title: 'PHP', link: 'https://www.php.net/' },
      { id: 8, src: nodejsImage, title: 'NodeJS', link: 'https://nodejs.org/fr' },
      { id: 9, src: cImage, title: 'C', link: 'https://www.iso.org/standard/74528.html' },
      { id: 10, src: pythonImage, title: 'Python', link: 'https://www.python.org/' },
    ],
  },
  {
    categoryName: 'Base de données',
    skills: [
      { id: 11, src: oracleSQLImage, title: 'Oracle SQL', link: 'https://www.oracle.com/fr/database/technologies/appdev/sql.html' },
      { id: 12, src: mongodbImage, title: 'MongoDB', link: 'https://www.mongodb.com/' },
      { id: 13, src: mysqlImage, title: 'MySQL', link: 'https://www.mysql.com/' },
    ],
  },
  {
    categoryName: 'DevOps',
    skills: [
      { id: 16, src: gitImage, title: 'Git', link: 'https://git-scm.com/' },
      { id: 17, src: githubImage, title: 'Github', link: 'https://github.com/' },
      { id: 18, src: gitlabImage, title: 'Gitlab', link: 'https://gitlab.com/' },
      { id: 19, src: cicd, title: 'CI/CD', link: 'https://docs.gitlab.com/ee/ci/' },
      { id: 20, src: dockerImage, title: 'Docker', link: 'https://www.docker.com/' },
    ],
  },
  {
    categoryName: "Systèmes d'exploitation",
    skills: [
      { id: 14, src: windowsImage, title: 'Windows', link: 'https://www.microsoft.com/fr-fr/windows' },
      { id: 15, src: ubuntuImage, title: 'Ubuntu', link: 'https://www.ubuntu-fr.org/' },
    ],
  },
  {
    categoryName: 'IDE',
    skills: [
      { id: 21, src: vscodeImage, title: 'Visual Studio Code', link: 'https://code.visualstudio.com/' },
      { id: 22, src: jetbrainsImage, title: 'Jetbrain IDEs', link: 'https://www.jetbrains.com/fr-fr/products/' },
    ],
  },
];
