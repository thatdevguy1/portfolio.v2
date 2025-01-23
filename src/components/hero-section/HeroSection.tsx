import { useRef } from "react";
import "./heroSection.css";
import { motion } from "motion/react";

interface HeroSectionProps {
  setSection: (section: number) => void;
}

function HeroSection({ setSection }: HeroSectionProps) {
  const locationRef = useRef<HTMLImageElement>(null);

  function handleLocationHover() {
    locationRef.current?.classList.add("location-marker-bounce");
    setTimeout(() => {
      locationRef.current?.classList.remove("location-marker-bounce");
    }, 500);
  }

  return (
    <>
      <motion.div
        onViewportEnter={() => setSection(0)}
        className="hero-section relative"
      >
        <div className="absolute left-0 top-0 flex flex-row w-[120px] justify-around m-2">
          <a href="https://www.github.com/thatdevguy1" target="_blank">
            <img
              className="hero-img text-icon"
              src="./icons/github-icon.svg"
              alt="github"
            />
          </a>
          <a href="https://www.linkedin.com/in/davidtbland" target="_blank">
            <img
              className="hero-img text-icon"
              src="./icons/linkedin-icon.svg"
              alt="linkedin"
            />
          </a>
          <a href="./david-bland-resume.pdf" target="_blank">
            <img
              className="hero-img text-icon"
              src="./icons/resume-icon.svg"
              alt="resume"
            />
          </a>
        </div>
        <h1 className="sm:text-9xl text-7xl">David Bland</h1>
        <h2 className="text-md ">Full Stack Developer - MERN Specialist</h2>
        <div id="location-wrapper">
          <img
            id="location-marker"
            className="text-icon"
            src="./icons/map-pin.svg"
            alt="location icon"
            ref={locationRef}
            onMouseOver={handleLocationHover}
          />
          <h3 className="text-xs"> Toronto, ON, Canada</h3>
        </div>
      </motion.div>
    </>
  );
}

export default HeroSection;
