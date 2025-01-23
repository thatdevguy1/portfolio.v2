import { useState, useRef, useEffect } from "react";
import TechSection from "./components/tech-section/TechSection";
import "./App.css";
import ProjectsSection from "./components/projects-section/ProjectsSection";
import HeroSection from "./components/hero-section/HeroSection";
import ExperienceSection from "./components/experience-section/ExperienceSection";
import Content from "./components/content/Content";

function App() {
  const [section, setSection] = useState<number>(0);
  const [selectSection, setSelectSection] = useState<number>(0);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    switch (selectSection) {
      case 1:
        experienceRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case 2:
        projectsRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case 3:
        techRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  }, [selectSection]);

  return (
    <>
      <Content currentSection={section} setSelectSection={setSelectSection} />
      <HeroSection setSection={setSection} />
      <ExperienceSection
        setSection={setSection}
        experienceRef={experienceRef}
      />
      <ProjectsSection setSection={setSection} projectsRef={projectsRef} />
      <TechSection setSection={setSection} techRef={techRef} />
    </>
  );
}

export default App;
