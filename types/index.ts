// ============================================
// Portfolio Data Types - Strict TypeScript Contracts
// ============================================

export type AvailabilityStatus = "available" | "busy" | "unavailable";

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
}

export interface Profile {
  name: string;
  title: string;
  company: string;
  tagline: string;
  location: string;
  availability: AvailabilityStatus;
  image: string;
  social: SocialLinks;
  logoMark: string;
}

export interface About {
  shortIntro: string;
  longBio: string;
  highlights: string[];
  focusAreas: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string | null;
  location: string;
  impactPoints: string[];
  technologies: string[];
}

export interface CaseStudy {
  problem: string;
  approach: string;
  outcome: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  liveUrl: string | null;
  githubUrl: string | null;
  image: string;
  year: number;
  featured: boolean;
  highlights: string[];
  category: "fullstack" | "enterprise" | "production";
  caseStudy?: CaseStudy;
}

export interface SkillCategory {
  category: string;
  items: SkillItem[];
}

export interface SkillItem {
  name: string;
  years: number;
  proficiency: number; // 0-100
}

export interface Philosophy {
  id: string;
  tag: string;
  headline: string;
  headlineEmphasis: string;
  body: string;
  bodyEmphasis?: string;
  hasCodeBlock?: boolean;
  isDark?: boolean;
}

export interface CodeExample {
  filename: string;
  badCode: string;
  goodCode: string;
  badComment: string;
  goodComment: string;
}

export interface Stats {
  yearsExperience: string;
  productsInProduction: number;
  technologiesMastered: string;
  codeQualities: string[];
}

export interface Quote {
  text: string;
  emphasis: string;
  author: string;
  title: string;
}

export interface Links {
  github: string;
  linkedin: string;
  resume: string;
  email: string;
}

export interface MarqueeItem {
  text: string;
}

// Navigation
export interface NavItem {
  label: string;
  href: string;
}
