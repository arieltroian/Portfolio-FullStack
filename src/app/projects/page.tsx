import ProjectCard from "./projectCard";
import ProjectsList, { Projects } from "./projectList";

const ProjectsPage = () => {
  return (
    <section id="projetos" className="pt-10">
      <h1 className="text-2xl font-bold mb-6">Principais projetos</h1>
      <div className="p-4 lg:p-16 lg:mr-10 flex flex-col gap-16 items-center justify-center">
        {ProjectsList.map((project: Projects) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
