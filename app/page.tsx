import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { MarqueeSection } from "@/components/marquee-section";
import { PhilosophySection } from "@/components/philosophy-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { QuoteSection } from "@/components/quote-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { getAllPortfolioData } from "@/lib/data";

export default function HomePage() {
  // Load all data at build time (SSG)
  const {
    profile,
    about,
    projects,
    skills,
    philosophy,
    stats,
    quote,
    links,
    marqueeItems,
    codeExample,
    navigation,
  } = getAllPortfolioData();

  return (
    <>
      <Navbar profile={profile} navigation={navigation} />

      <main>
        <HeroSection profile={profile} about={about} stats={stats} links={links} />

        <MarqueeSection items={marqueeItems} />

        <PhilosophySection philosophy={philosophy} codeExample={codeExample} />

        <ProjectsSection projects={projects} />

        <SkillsSection skills={skills} />

        <QuoteSection quote={quote} />

        <ContactSection profile={profile} links={links} />
      </main>

      <Footer profile={profile} links={links} />
    </>
  );
}
