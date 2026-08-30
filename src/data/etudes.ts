import { Etude } from '../types';
import iutImage from '../assets/iut.png';
import miageImage from '../assets/miage.png';

export const etudes: Etude[] = [
  {
    id: 1,
    link: 'https://univ-cotedazur.fr/miage',
    title: "MIAGE de Nice Sophia Antipolis - Université Côte d'Azur",
    name: 'Master 1 MIAGE',
    year: '2024',
    image: miageImage,
    location:
      'https://www.google.com/maps?sca_esv=579280459&rlz=1C1ONGR_frFR1044FR1044&output=search&q=miage+nice&source=lnms&entry=mc&sa=X&ved=2ahUKEwj0po_n46iCAxV3UaQEHdwxAcwQ0pQJegQICRAB',
    actual: true,
  },
  {
    id: 2,
    link: 'https://univ-cotedazur.fr/miage',
    title: "MIAGE de Nice Sophia Antipolis - Université Côte d'Azur",
    name: 'Licence 3 MIAGE',
    year: '2023 - 2024',
    image: miageImage,
    location:
      'https://www.google.com/maps?sca_esv=579280459&rlz=1C1ONGR_frFR1044FR1044&output=search&q=miage+nice&source=lnms&entry=mc&sa=X&ved=2ahUKEwj0po_n46iCAxV3UaQEHdwxAcwQ0pQJegQICRAB',
  },
  {
    id: 3,
    link: 'https://iut.univ-cotedazur.fr/',
    title: "IUT Nice Côte d'Azur",
    name: 'DUT Informatique',
    year: '2021 - 2023',
    image: iutImage,
    location:
      'https://www.google.com/maps?sca_esv=579280459&rlz=1C1ONGR_frFR1044FR1044&output=search&q=iut+fabron&source=lnms&entry=mc&sa=X&sqi=2&ved=2ahUKEwjLusHh46iCAxUKT6QEHXazBAUQ0pQJegQICxAB',
  },
];
