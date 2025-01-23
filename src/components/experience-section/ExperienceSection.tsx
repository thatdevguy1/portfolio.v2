import React from "react";
import { motion } from "motion/react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

interface ExperienceSectionProps {
  setSection: (section: number) => void;
  experienceRef: React.RefObject<HTMLDivElement>;
}

function ExperienceSection({
  setSection,
  experienceRef,
}: ExperienceSectionProps) {
  return (
    <div className="flex flex-row justify-center pt-40">
      <div ref={experienceRef} className="max-w-[800px] ">
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <motion.div
              className="timeline-start mb-10 md:text-end"
              initial={{ opacity: 0, translateX: "-50px" }}
              whileInView={{
                opacity: 1,
                translateX: 0,
                transition: { duration: 1 },
              }}
            >
              <Card className="self-center justify-self-center relative z-5">
                <CardHeader>
                  <CardTitle>
                    Full Stack Developer - ViewCo Digital / RocketPlan
                  </CardTitle>
                  <CardDescription>
                    August 2023 - Current (Occasional Contract)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col text-stone-500 flex-wrap justify-start ">
                    Implemented 2 major features into the RocketPlan app using
                    React, Typescript, PHP, Laravel, MySQL, and AWS.
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <motion.div
              className="timeline-end md:mb-10"
              initial={{ opacity: 0, translateX: "50px" }}
              whileInView={{
                opacity: 1,
                translateX: 0,
                transition: { duration: 1 },
              }}
            >
              <Card className="self-center justify-self-center relative z-5">
                <CardHeader>
                  <CardTitle>Lead Instructor - General Assembly</CardTitle>
                  <CardDescription>January 2020 - October 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col text-stone-500 flex-wrap justify-start">
                    Lead instructor for the Full Stack Development program at
                    General Assembly. Instructed students on the MERN stack +
                    Python, Django, PostgreSQL, and an intro to AWS.
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <motion.div
              className="timeline-start mb-10 md:text-end"
              initial={{ opacity: 0, translateX: "-50px" }}
              whileInView={{
                opacity: 1,
                translateX: 0,
                transition: { duration: 1 },
              }}
              onViewportEnter={() => setSection(1)}
            >
              <Card className="self-center justify-self-center relative z-5">
                <CardHeader>
                  <CardTitle> Instructor - General Assembly</CardTitle>
                  <CardDescription>
                    {" "}
                    October 2020 - Devember 2020
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col text-stone-500 flex-wrap justify-start">
                    Supported students during labs and projects by providing one
                    on one assistance and code reviews.
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <motion.div
              className="timeline-end md:mb-10"
              initial={{ opacity: 0, translateX: "50px" }}
              whileInView={{
                opacity: 1,
                translateX: 0,
                transition: { duration: 1 },
              }}
            >
              <Card className="self-center justify-self-center relative z-5">
                <CardHeader>
                  <CardTitle>
                    Assistant Instructor - Trilogy Education (University of
                    Toronto)
                  </CardTitle>
                  <CardDescription> January 2019 - June 2020</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col text-stone-500 flex-wrap justify-start">
                    Assisted students in mastering web development fundamentals
                    and advanced topics in the bootcamp. Filled in for the lead
                    instructor when needed to ensure smooth classroom
                    operations.
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            <hr />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ExperienceSection;
