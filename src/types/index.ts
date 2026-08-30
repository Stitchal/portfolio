export interface NavLink {
  id: number;
  link: string;
}

export interface SkillItem {
  id: number;
  src: string;
  title: string;
  link: string;
}

export interface SkillCategory {
  categoryName: string;
  skills: SkillItem[];
}

export interface AutreCompetence {
  id: number;
  content: string;
}

export interface TechIcon {
  langage: string;
  icon: string;
}

export interface Project {
  id: number;
  title: string;
  date: string;
  description: string;
  src: string;
  link?: string;
  langages: TechIcon[];
}

export interface Etude {
  id: number;
  link: string;
  title: string;
  name: string;
  year: string;
  image: string;
  location: string;
  actual?: boolean;
}

export interface Experience {
  id: number;
  title: string;
  period: string;
  company: string;
  imageUrl: string;
  locationUrl?: string;
  companyUrl?: string;
  tasks?: string[];
  technologies?: string[];
  url?: string;
}
