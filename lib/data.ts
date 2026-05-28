// ============================================
// Data Loader - Centralized data access layer
// ============================================

import type {
  Profile,
  About,
  Experience,
  Project,
  SkillCategory,
  Philosophy,
  Stats,
  Quote,
  Links,
  MarqueeItem,
  CodeExample,
  NavItem,
} from "@/types";

import profileData from "@/data/profile.json";
import aboutData from "@/data/about.json";
import experienceData from "@/data/experience.json";
import projectsData from "@/data/projects.json";
import skillsData from "@/data/skills.json";
import philosophyData from "@/data/philosophy.json";
import statsData from "@/data/stats.json";
import quoteData from "@/data/quote.json";
import linksData from "@/data/links.json";
import marqueeData from "@/data/marquee.json";
import codeExampleData from "@/data/code-example.json";
import navigationData from "@/data/navigation.json";

// Type-safe data accessors
export function getProfile() {
  return profileData as Profile;
}

export function getAbout() {
  return aboutData as About;
}

export function getExperience() {
  return experienceData as Experience[];
}

export function getProjects() {
  return projectsData as Project[];
}

export function getFeaturedProjects() {
  return (projectsData as Project[]).filter((p) => p.featured);
}

export function getSkills() {
  return skillsData as SkillCategory[];
}

export function getPhilosophy() {
  return philosophyData as Philosophy[];
}

export function getStats() {
  return statsData as Stats;
}

export function getQuote() {
  return quoteData as Quote;
}

export function getLinks() {
  return linksData as Links;
}

export function getMarqueeItems() {
  return marqueeData as MarqueeItem[];
}

export function getCodeExample() {
  return codeExampleData as CodeExample;
}

export function getNavigation() {
  return navigationData as NavItem[];
}

// Aggregate data loader for SSR
export function getAllPortfolioData() {
  return {
    profile: getProfile(),
    about: getAbout(),
    experience: getExperience(),
    projects: getProjects(),
    skills: getSkills(),
    philosophy: getPhilosophy(),
    stats: getStats(),
    quote: getQuote(),
    links: getLinks(),
    marqueeItems: getMarqueeItems(),
    codeExample: getCodeExample(),
    navigation: getNavigation(),
  };
}
