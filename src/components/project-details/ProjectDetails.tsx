import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ProjectDetailsProps {
  project: {
    title: string;
    description: string;
    imageUrl: string;
    technologies: string[];
    youtubeLink: string;
    githubLink: string;
    uri: string;
  } | null;
  handleBack: () => void;
}
function ProjectDetails({ project, handleBack }: ProjectDetailsProps) {
  return (
    <Card className="self-center justify-self-center relative z-5 max-[851px]:w-[95vw]">
      <CardHeader>
        <CardTitle>{project?.title}</CardTitle>
        <CardDescription>{project?.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <h3 className="text-lg font-bold">What I used:</h3>
        <div className="flex flex-col text-stone-500 flex-wrap justify-start h-[50px] sm:h-[100px]">
          {project?.technologies.map((tech, i) => (
            <span className="text-sm" key={i}>
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex flex-row justify-around mt-10">
        <Button className="mx-2" onClick={handleBack}>
          Back
        </Button>
        <a href={project!.uri} target="_blank">
          <Button className="mx-2">Visit Site</Button>
        </a>
        <a href={project!.githubLink} target="_blank">
          <Button className="mx-2">View Code</Button>
        </a>
      </CardFooter>
    </Card>
  );
}
export default ProjectDetails;
