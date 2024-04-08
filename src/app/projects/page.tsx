import ProjectCard from "./projectCard";
import ProjectsList, { Projects } from "./projectList";

const ProjectsPage = () => {
  return (
    <section id="projetos" className="pt-10">
      <h1 className="text-2xl font-bold mb-6">Meus principais projetos</h1>
      <div className="p-2 lg:p-4">
        {ProjectsList.map((project: Projects) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
