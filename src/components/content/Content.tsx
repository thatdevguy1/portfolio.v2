import { useEffect, useState } from "react";
import { motion } from "motion/react";

interface ContentProps {
  currentSection: number;
  setSelectSection: (section: number) => void;
}

function Content({ currentSection, setSelectSection }: ContentProps) {
  const [textColor, setTextColor] = useState<string>("white");
  useEffect(() => {
    if (currentSection != 0) {
      setTextColor("black");
    } else setTextColor("white");
  }, [currentSection]);

  function handleSelection(section: number) {
    setSelectSection(section);
  }

  return (
    <>
      <div
        className={`fixed top-10 right-10 z-50 flex flex-col justify-around items-center text-xs ${
          currentSection != 0 ? "text-black" : "text-white"
        }`}
      >
        <motion.a
          initial={{
            boxShadow: "inset 0px 0 0 0 #54b3d6",
            color: textColor,
          }}
          animate={{
            boxShadow:
              currentSection === 1
                ? `inset 100px 0 0 0 ${textColor}`
                : `inset 0px 0 0 0 ${textColor}`,
            color: currentSection === 1 ? "#dee4ea" : textColor,
            transition: { duration: 0.3 },
          }}
          href="#experience"
          onClick={() => handleSelection(1)}
          className={`${currentSection === 1 && "text-red-500"} px-1`}
        >
          EXPERIENCE
        </motion.a>
        <div
          className={`h-[20px] border-l ${
            currentSection != 0 ? "border-black" : "border-white"
          }`}
        ></div>
        <motion.a
          initial={{
            boxShadow: "inset 0px 0 0 0 #54b3d6",
            color: textColor,
          }}
          animate={{
            boxShadow:
              currentSection === 2
                ? `inset 100px 0 0 0 ${textColor}`
                : `inset 0px 0 0 0 ${textColor}`,
            color: currentSection === 2 ? "#dee4ea" : textColor,
            transition: { duration: 0.3 },
          }}
          onClick={() => handleSelection(2)}
          href="#projects"
          className={`${currentSection === 2 && "text-red-500"} px-1`}
        >
          PROJECTS
        </motion.a>
        <div
          className={`h-[20px] border-l ${
            currentSection != 0 ? "border-black" : "border-white"
          }`}
        ></div>
        <motion.a
          initial={{
            boxShadow: "inset 0px 0 0 0 #54b3d6",
            color: textColor,
          }}
          animate={{
            boxShadow:
              currentSection === 3
                ? `inset 100px 0 0 0 ${textColor}`
                : `inset 0px 0 0 0 ${textColor}`,
            color: currentSection === 3 ? "#dee4ea" : textColor,
            transition: { duration: 0.3 },
          }}
          href="#contact"
          onClick={() => handleSelection(3)}
          className={`${currentSection === 3 && "text-red-500"} px-1`}
        >
          TECHNOLOGIES
        </motion.a>
      </div>
    </>
  );
}

export default Content;
