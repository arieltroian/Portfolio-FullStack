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
    title: "Cãotinho PetCare",
    subtitle: "Agendamento de serviços",
    description:
      "O Cãotinho Pet Care é uma aplicação fullstack que simplifica o agendamento de serviços para animais de estimação, visando oferecer uma experiência única e conveniente para tutores. Seus principais objetivos são facilitar agendamentos, centralizar informações e garantir autenticação segura. Entre suas funcionalidades estão agendamento e cancelamento de serviços, com autenticação via conta do Google para segurança dos dados. Utiliza tecnologias como TypeScript, React.js, Next.js, Node.js, Prisma, Supabase, Google Auth, Tailwind CSS e Shadcn/ui para um desenvolvimento robusto, rápido e seguro.",
    technologyTags: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Shadcn/UI",
      "Node",
      "Prisma",
      "Supabase",
    ],
    projectPreviewLink: "https://caotinho-petcare.vercel.app/",
    githubRepositoryLink: "https://github.com/arieltroian/CaotinhoPetCare",
    previewImageUrl:
      "https://i.ibb.co/Ws8gnNM/preview-image-caotinho-petcare.png",
    responsiveImageUrl: "",
  },
  {
    id: 2,
    projectNumber: "02.",
    title: "API Agenda de Contatos ",
    subtitle: "API CRUD",
    description:
      "Back-end API CRUD (Create, Read, Update, Delete) para realizar operações em uma agenda de contatos.",
    technologyTags: ["TypeScript", "Node", "Prisma", "Fastify"],
    projectPreviewLink: "",
    githubRepositoryLink:
      "https://github.com/arieltroian/Agenda-de-Contatos-CRUD-API",
    previewImageUrl: "https://i.ibb.co/3B19KmJ/preview-image-contacts-api.png",
    responsiveImageUrl: "",
  },
  {
    id: 3,
    projectNumber: "03.",
    title: "Calculadora",
    subtitle: "Projeto de Calculadora",
    description:
      "Estudo feito com o intuito de fixar conhecimentos e desenvolver habilidades de lógica com JavaScript",
    technologyTags: ["HTML", "CSS", "JavaScript"],
    projectPreviewLink: "https://arieltroian-projeto-calculadora.netlify.app",
    githubRepositoryLink:
      "https://github.com/arieltroian/Projeto-Calculadora?tab=readme-ov-file",
    previewImageUrl: "https://i.ibb.co/0mfm5C7/preview-image-calculdora.png",
    responsiveImageUrl: "",
  },
  {
    id: 4,
    projectNumber: "04.",
    title: "Relógio Digital",
    subtitle: "Projeto de Relógio Digital",
    description:
      "Este é um projeto simples, que teve como objetivo principal a prática de JavaScript. Não tive muitas dificuldas na realização.",
    technologyTags: ["HTML", "CSS", "JavaScript"],
    projectPreviewLink: "https://arieltroian.github.io/Relogio-Digital/",
    githubRepositoryLink:
      "https://github.com/arieltroian/Relogio-Digital?tab=readme-ov-file",
    previewImageUrl:
      "https://i.ibb.co/jVJbdV4/preview-image-relogio-digital.png",
    responsiveImageUrl: "",
  },
];

export default ProjectsList;
