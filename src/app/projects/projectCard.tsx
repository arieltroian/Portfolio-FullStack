import { Card, CardContent } from "@/components/ui/card";
import { Projects } from "./projectList";

interface ProjectCardProps {
  project: Projects;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap gap-8 overflow-hidden w-full">
      <div className="my-1 w-full sm:px-1 lg:w-3/12 flex items-center justify-center">
        <h1 className="font-extrabold text-5xl text-primary">
          {project.projectNumber}
        </h1>
      </div>
      <Card className="p-2 lg:p-4 my-1 w-full sm:px-1 lg:w-9/12">
        <CardContent>
          <h2>{project.title}</h2>
          <p>{project.subtitle}</p>
          {/* Adicione outras informações do projeto conforme necessário */}
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectCard;
