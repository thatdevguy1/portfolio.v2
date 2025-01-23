import { useState } from "react";
import ProjectText from "../project-text/ProjectText";
import { motion } from "motion/react";
import "./projectSection.css";
import ProjectDetails from "../project-details/ProjectDetails";

interface Projects {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  youtubeLink: string;
  githubLink: string;
  uri: string;
}

const projects = {
  CloudRoom: {
    title: "CloudRoom",
    description:
      "A cloud storage platform that allows users to store and share files.",
    imageUrl: "./imgs/cloudroom.png",
    technologies: [
      "React",
      "Typescript",
      "GO",
      "DynamoDB",
      "S3",
      "Lambda",
      "API Gateway",
      "Cognito",
      "Amplify",
      "Shadcn",
    ],
    youtubeLink: "https://www.youtube.com/embed/7_pfrDaiZKU",
    githubLink: "https://github.com/thatdevguy1/CloudRoom",
    uri: "https://www.cloudroomapp.com",
  },
  LetsPlay: {
    title: "LetsPlay",
    description: "A platform that allows users to find and join sports events.",
    imageUrl: "./imgs/letsplay.png",
    technologies: [
      "React",
      "Node",
      "MongoDB",
      "Express",
      "MaterialUI",
      "Mapbox",
      "Socket.io",
      "Redux",
    ],
    youtubeLink: "https://www.youtube.com/embed/7_pfrDaiZKU",
    githubLink: "https://www.github.com/thatdevguy1/letsplay",
    uri: "",
  },
  ReadyUp: {
    title: "ReadyUp",
    description: "A platform that allows users to confirm they are ready.",
    imageUrl: "./imgs/readyuprooms.png",
    technologies: ["React", "Node", "MongoDB", "Express", "Socket.io"],
    youtubeLink: "https://www.youtube.com/embed/7_pfrDaiZKU",
    githubLink: "https://www.github.com/thatdevguy1/readyup",
    uri: "http://readyup-rooms.herokuapp.com/",
  },
  ClanImba: {
    title: "ClanImba",
    description: "A platform that allows users to find and join gaming clans.",
    imageUrl: "./imgs/clanimba.png",
    technologies: [
      "React",
      "Node",
      "MongoDB",
      "Express",
      "OAuth",
      "MaterialUI",
      "Socket.io",
      "Redux",
    ],
    youtubeLink: "https://www.youtube.com/embed/7_pfrDaiZKU",
    githubLink: "https://www.github.com/thatdevguy1/clanimba_mern",
    uri: "",
  },
  Projects: {
    title: "Projects",
    description: "A collection of projects I've worked on.",
    imageUrl: "./imgs/projects.webp",
    technologies: [],
    youtubeLink: "",
    githubLink: "",
    uri: "",
  },
};

interface ProjectsSectionProps {
  setSection: (section: number) => void;
  projectsRef: React.RefObject<HTMLDivElement>;
}

function ProjectsSection({ setSection, projectsRef }: ProjectsSectionProps) {
  const [hoveredProject, setHoveredProject] = useState<string>("Projects");
  const [selectedProject, setSelectedProject] = useState<Projects | null>(null);
  const [removeElement, setRemoveElement] = useState<boolean>(false);

  function handleClick(projectTitle: string) {
    // @ts-ignore
    setSelectedProject(projects[projectTitle]);
  }

  function handleBack() {
    setRemoveElement(false);
    setSelectedProject(null);
  }

  return (
    <div
      ref={projectsRef}
      className="flex flex-col justify-center items-center relative h-[100vh] overflow-hidden"
    >
      <div className="absolute z-0 custom-skew bg-slate-850 h-[40vh] max-[850px]:h-[100%] w-[3000px] max-[850px]:w-[100vw] left-0 border border-y-[1px] border-slate-200"></div>
      <div
        className={`flex min-[850px]:flex-row flex-col-reverse h-[60vh] ${
          removeElement ? "max-[850px]:mt-[250px]" : "max-[850px]:mt-[0px]"
        } z-5`}
      >
        {removeElement ? (
          <motion.div
            className="flex z-5 flex-col justify-center self-center p-10 w-[40vw]"
            key={1}
            initial={{
              opacity: selectedProject ? 0 : 1,
            }}
            animate={{
              opacity: selectedProject ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <ProjectDetails handleBack={handleBack} project={selectedProject} />
          </motion.div>
        ) : (
          <motion.div
            key={2}
            className="flex min-[850px]:flex-col flex-row min-[850px]:justify-center justify-around min-[850px]:w-[40vw] w-[100vw] lg:p-20 sm:p-10 lg:pr-5 md:pr-15 pr-5"
            initial={{
              x: selectedProject ? 0 : -200,
              opacity: selectedProject ? 1 : 0,
            }}
            animate={{
              x: selectedProject ? -200 : 0,
              opacity: selectedProject ? 0 : 1,
            }}
            transition={{ duration: 0.3 }}
            onAnimationComplete={() => {
              if (selectedProject) setRemoveElement(true);
            }}
            onAnimationStart={() => {
              setRemoveElement(false);
            }}
          >
            <>
              <ProjectText
                handleClick={handleClick}
                title="CloudRoom"
                setHoveredProject={setHoveredProject}
              />
              <ProjectText
                handleClick={handleClick}
                title="ReadyUp"
                setHoveredProject={setHoveredProject}
              />
              <ProjectText
                handleClick={handleClick}
                title="LetsPlay"
                setHoveredProject={setHoveredProject}
              />
              <ProjectText
                handleClick={handleClick}
                title="ClanImba"
                setHoveredProject={setHoveredProject}
                setSection={setSection}
              />
            </>
          </motion.div>
        )}
        <div className="flex flex-col justify-center items-center max-[850px]:h-[40vh] min-[850px]:w-[60vw] w-[100vw] lg:px-10">
          <motion.div
            className="project-view border-0 min-[850px]:mr-10 rounded-md min-[850px]:h-[70%] lg:h-[75%] w-[95%] overflow-hidden relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: hoveredProject ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {selectedProject ? (
              <iframe
                className=" self-center justify-self-center max-[850px]:h-[40vh] h-full w-full"
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/7_pfrDaiZKU"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                // @ts-ignore
                allowfullscreen
              ></iframe>
            ) : (
              <>
                <motion.img
                  src={
                    // @ts-ignore
                    projects[hoveredProject]?.imageUrl || "./imgs/projects.webp"
                  }
                  alt="hovered"
                  key={hoveredProject}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duraction: 0.3 }}
                  className="h-full w-full object-cover object-top"
                />
              </>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;
