import "./projectText.css";
import { motion } from "motion/react";

interface ProjectTextProps {
  title: string;
  setHoveredProject?: (project: string) => void;
  handleClick?: (title: string) => void;
  setSection?: (section: number) => void;
}

function ProjectText({
  title,
  setHoveredProject,
  handleClick,
  setSection,
}: ProjectTextProps) {
  return (
    <motion.h1
      onMouseEnter={() => setHoveredProject && setHoveredProject(title)}
      onClick={() => handleClick && handleClick(title)}
      className="my-3 lg:text-5xl md:text-3xl sm:text-xl relative cursor-pointer"
      initial={{
        boxShadow: "inset 0px 0 0 0 #54b3d6",
        color: "#dee4ea",
      }}
      whileHover={{
        boxShadow: "inset 450px 0 0 0 #dee4ea",
        color: "#05386b",
        transition: { duration: 0.3 },
      }}
      onViewportEnter={() => setSection && setSection(2)}
    >
      {title.toUpperCase()}
    </motion.h1>
  );
}

export default ProjectText;
