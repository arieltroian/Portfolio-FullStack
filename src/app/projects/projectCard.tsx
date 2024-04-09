"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Projects } from "./projectList";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ExternalLink from "@/components/externalLink";
import { Code2Icon, EyeIcon } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
  project: Projects;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="flex flex-wrap md:flex-nowrap overflow-hidden w-full items-center justify-center">
      <div className="mb-2 sm:px-1 w-full md:w-3/12 flex md:items-center md:justify-center">
        <h1 className="font-extrabold text-3xl lg:text-5xl text-primary">
          {project.projectNumber}
        </h1>
      </div>
      <Card className="w-4/5 md:w-9/12 rounded-2xl hover:shadow-xl h-[420px] md:h-[220px]">
        <CardContent className="p-0">
          <div className="reletive flex flex-col  md:flex-row gap-4">
            <Image
              src={project.previewImageUrl}
              alt={project.title}
              height={0}
              width={0}
              style={{ objectFit: "cover" }}
              sizes="100vw"
              className="md:w-[260px] w-full md:h-max h-auto rounded-2xl  md:rounded-l-2xl"
            />
            <div className="flex flex-col w-full justify-center">
              <div className="pl-3 md:p-0">
                <h2 className="text-xl font-bold">{project.title}</h2>
                <p className="text-neutral-300 mb-2">{project.subtitle}</p>
                <div className="lg:flex lg:flex-wrap lg:items-center overflow-x-auto whitespace-nowrap">
                  {project.technologyTags.map((tag, index) => (
                    <Badge key={index} className="m-1 inline-block">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <div className="flex items-center justify-center">
                    <Button variant="outline" size="lg" className="mt-4">
                      Detalhes
                    </Button>
                  </div>
                </DialogTrigger>

                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{project.title}</DialogTitle>
                    <DialogDescription>
                      {project.technologyTags.map((tag, index) => (
                        <Badge key={index} className="m-1">
                          {tag}
                        </Badge>
                      ))}
                    </DialogDescription>
                  </DialogHeader>
                  <p className="text-sm">{project.description}</p>
                  <div className="flex gap-2 items-center justify-center mt-2">
                    <Button variant="outline" size="icon">
                      <ExternalLink href={project.projectPreviewLink}>
                        <EyeIcon />
                      </ExternalLink>
                    </Button>
                    <Button variant="outline" size="icon">
                      <ExternalLink href={project.githubRepositoryLink}>
                        <Code2Icon />
                      </ExternalLink>
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectCard;
