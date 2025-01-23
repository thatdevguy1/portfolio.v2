import "./techSection.css";
import { motion } from "motion/react";

const integrations = [
  [
    {
      id: "integration-1",
      icon: <img alt="Integration" src="./icons/github-icon.svg" />,
    },
    {
      id: "integration-2",
      icon: <img alt="Integration" src="./icons/aws-icon.svg" />,
    },
    {
      id: "integration-3",
      icon: <img alt="Integration" src="./icons/laravel-icon.svg" />,
    },
    {
      id: "integration-4",
      icon: <img alt="Integration" src="./icons/react-icon.svg" />,
    },
    {
      id: "integration-5",
      icon: <img alt="Integration" src="./icons/express-icon.svg" />,
    },
  ],
  [
    {
      id: "integration-6",
      icon: <img alt="Integration" src="./icons/mongodb-icon.svg" />,
    },
    {
      id: "integration-7",
      icon: <img alt="Integration" src="./icons/node-icon.svg" />,
    },
    {
      id: "integration-8",
      icon: <img alt="Integration" src="./icons/typescript-icon.svg" />,
    },
    {
      id: "integration-9",
      icon: <img alt="Integration" src="./icons/python-icon.svg" />,
    },
    {
      id: "integration-10",
      icon: <img alt="Integration" src="./icons/django-icon.svg" />,
    },
  ],
  [
    {
      id: "integration-11",
      icon: <img alt="Integration" src="./icons/angular-icon.svg" />,
    },
    {
      id: "integration-12",
      icon: <img alt="Integration" src="./icons/php-icon.svg" />,
    },
    {
      id: "integration-13",
      icon: <img alt="Integration" src="./icons/go-icon.svg" />,
    },
    {
      id: "integration-14",
      icon: <img alt="Integration" src="./icons/postgresql-icon.svg" />,
    },
    {
      id: "integration-15",
      icon: <img alt="Integration" src="./icons/tailwind-icon.svg" />,
    },
  ],
];

interface TechSectionProps {
  setSection: (section: number) => void;
  techRef: React.RefObject<HTMLDivElement>;
}

const TechSection = ({ setSection, techRef }: TechSectionProps) => {
  return (
    <section ref={techRef} className="relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1400 600"
          className="min-h-full min-w-full"
        >
          <defs>
            <pattern
              id="grid"
              width="24"
              height="24"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 24 0 L 0 0 0 24"
                fill="none"
                stroke="hsl(var(--muted))"
                strokeWidth="1"
                strokeOpacity={1}
              />
            </pattern>
          </defs>
          <rect width="1400" height="600" fill="url(#grid)" />
        </svg>
      </div>
      <div className="relative">
        <div className="absolute left-0 z-10 hidden h-full w-1/2 bg-[linear-gradient(to_right,hsl(var(--background))_85%,transparent_100%)] md:block"></div>
        <div className="md:-space-x-26 xl:m-auto lg:ml-0 md:ml-0 sm:ml-0 sm:mr-auto w-full container relative flex flex-col md:items-start sm:items-center md:flex-row ">
          <div className="width-override z-20 -mx-[calc(theme(container.padding))] w-[calc(100%+2*theme(container.padding))] shrink-0 bg-background px-[calc(theme(container.padding))] pt-32 md:w-[100%] md:bg-transparent md:pb-3 sm:px-10 sm:py-0">
            <div className="flex flex-col items-center text-left">
              <div className="max-w-sm">
                <motion.h1
                  initial={{
                    opacity: 0,
                  }}
                  whileInView={{
                    opacity: 1,
                    transition: {
                      duration: 1,
                    },
                  }}
                  className="my-6 text-pretty text-4xl font-bold text-6xl"
                >
                  What I've Worked With
                </motion.h1>
                <div className="grid grid-rows-7 grid-cols-8">
                  <motion.div
                    initial={{
                      opacity: 0,
                    }}
                    whileInView={{
                      opacity: 1,
                      transition: {
                        duration: 2,
                      },
                    }}
                    className="row-start-1 col-start-3"
                  >
                    <div className="font-black text-2xl">React</div>
                  </motion.div>
                  <motion.div
                    initial={{
                      opacity: 0,
                    }}
                    whileInView={{
                      opacity: 1,
                      transition: {
                        duration: 1,
                      },
                    }}
                    className="row-start-3 col-start-6"
                  >
                    <div className="font-bold text-lg">Typescript</div>
                  </motion.div>
                  <motion.div
                    initial={{
                      opacity: 0,
                    }}
                    whileInView={{
                      opacity: 1,
                      transition: {
                        duration: 0.8,
                      },
                    }}
                    className="row-start-7 col-start-2 ml-5"
                  >
                    <div className="font-black text-xl">Express</div>
                  </motion.div>
                  <motion.div
                    initial={{
                      opacity: 0,
                    }}
                    whileInView={{
                      opacity: 1,
                      transition: {
                        duration: 1.3,
                      },
                    }}
                    className="row-start-5 col-start-1 ml-10"
                  >
                    <div className="font-extrabold text-xl">MongoDB</div>
                  </motion.div>
                  <motion.div
                    initial={{
                      opacity: 0,
                    }}
                    whileInView={{
                      opacity: 1,
                      transition: {
                        duration: 1,
                      },
                    }}
                    onViewportEnter={() => setSection(3)}
                    className="row-start-7 col-start-6"
                  >
                    <div className="font-thin text-sm">Laravel</div>
                  </motion.div>
                  <motion.div
                    initial={{
                      opacity: 0,
                    }}
                    whileInView={{
                      opacity: 1,
                      transition: {
                        duration: 1.6,
                      },
                    }}
                    className="row-start-2 col-start-1"
                  >
                    <div className="font-thin text-sm">Golang</div>
                  </motion.div>
                  <motion.div
                    initial={{
                      opacity: 0,
                    }}
                    whileInView={{
                      opacity: 1,
                      transition: {
                        duration: 0.3,
                      },
                    }}
                    className="row-start-3 col-start-2"
                  >
                    <div className="font-thin text-md">Django</div>
                  </motion.div>
                  <motion.div
                    initial={{
                      opacity: 0,
                    }}
                    whileInView={{
                      opacity: 1,
                      transition: {
                        duration: 2,
                      },
                    }}
                    className="row-start-2 col-start-5"
                  >
                    <div className="font-thin text-md">Python</div>
                  </motion.div>
                  <motion.div
                    initial={{
                      opacity: 0,
                    }}
                    whileInView={{
                      opacity: 1,
                      transition: {
                        duration: 1.1,
                      },
                    }}
                    className="row-start-1 col-start-7"
                  >
                    <div className="font-thin text-xs">PHP</div>
                  </motion.div>
                  <motion.div
                    initial={{
                      opacity: 0,
                    }}
                    whileInView={{
                      opacity: 1,
                      transition: {
                        duration: 0.6,
                      },
                    }}
                    className="row-start-6 col-start-5"
                  >
                    <div className="font-thin text-xs">Git</div>
                  </motion.div>
                  <motion.div
                    initial={{
                      opacity: 0,
                    }}
                    whileInView={{
                      opacity: 1,
                      transition: {
                        duration: 0.7,
                      },
                    }}
                    className="row-start-6 col-start-1"
                  >
                    <div className="font-thin text-xs">TailwindCss</div>
                  </motion.div>
                  <motion.div
                    initial={{
                      opacity: 0,
                    }}
                    whileInView={{
                      opacity: 1,
                      transition: {
                        duration: 1.4,
                      },
                    }}
                    className="row-start-5 col-start-5"
                  >
                    <div className="ml-8 font-thin text-xs">Nodejs</div>
                  </motion.div>
                  <motion.div
                    initial={{
                      opacity: 0,
                    }}
                    whileInView={{
                      opacity: 1,
                      transition: {
                        duration: 1.9,
                      },
                    }}
                    className="row-start-4 col-start-4"
                  >
                    <div className="font-thin text-[10px]/[6px]">
                      PostgreSQL
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{
                      opacity: 0,
                    }}
                    whileInView={{
                      opacity: 1,
                      transition: {
                        duration: 1.1,
                      },
                    }}
                    className="row-start-1 col-start-1"
                  >
                    <div className="font-normal text-lg">AWS</div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-16 pb-8 pt-12 ">
              {integrations.map((line, i) => (
                <div key={i} className="flex gap-x-24 odd:-translate-x-24">
                  {line.map((integration) => (
                    <motion.div
                      initial={{
                        opacity: 0,
                        translateX: 50,
                      }}
                      whileInView={{
                        opacity: 1,
                        translateX: 0,
                        transition: {
                          duration: 0.3,
                        },
                      }}
                      key={integration.id}
                      className="md:size-24 sm:size-12 rounded-xl border border-background bg-background shadow-xl"
                    >
                      <div className="h-full w-full bg-muted/20 md:p-4 sm:p-0">
                        {integration.icon}
                      </div>
                    </motion.div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSection;
