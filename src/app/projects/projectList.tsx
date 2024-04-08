export interface Projects {
  id: number;
  projectNumber: string;
  title: string;
  subtitle: string;
  description: string;
  technologyTags: string[];
  projectPreviewLink: string;
  githubRepositoryLink: string;
  previewImageUrl: string;
  responsiveImageUrl: string;
}

const ProjectsList: Projects[] = [
  {
    id: 1,
    projectNumber: "01.",
    title: "Projeto 1",
    subtitle: "Lorem ipsum dolor sit amet. Est voluptatem ipsam",
    description: "",
    technologyTags: [""],
    projectPreviewLink: "",
    githubRepositoryLink: "",
    previewImageUrl: "",
    responsiveImageUrl: "",
  },
  {
    id: 2,
    projectNumber: "02.",
    title: "Projeto 2",
    subtitle: "Lorem ipsum dolor sit amet. Est voluptatem ipsam",
    description: "",
    technologyTags: [""],
    projectPreviewLink: "",
    githubRepositoryLink: "",
    previewImageUrl: "",
    responsiveImageUrl: "",
  },
  {
    id: 3,
    projectNumber: "03.",
    title: "Projeto 3",
    subtitle: "Lorem ipsum dolor sit amet. Est voluptatem ipsam",
    description: "",
    technologyTags: [""],
    projectPreviewLink: "",
    githubRepositoryLink: "",
    previewImageUrl: "",
    responsiveImageUrl: "",
  },
];
export default ProjectsList;
