import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LinkIcon, Linkedin, MailIcon } from "lucide-react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ExternalLink from "@/components/externalLink";
import { Badge } from "@/components/ui/badge";

const HomePage = () => {
  return (
    <section className="flex items-center justify-center mt-[-2rem]">
      <div className="flex flex-wrap lg:flex-nowrap gap-8 overflow-hidden w-full">
        <div className="my-1 w-full sm:px-1 lg:w-4/12">
          <div className="px-6 flex flex-col items-center justify-center mt-3">
            <Image
              src="/profile-image.png"
              alt=""
              height={0}
              width={0}
              sizes="100vw"
              className="w-32 h-auto rounded-full drop-shadow-xl bg-neutral-900"
            />
            <div className="flex flex-col items-center justify-center mt-3">
              <h1 className="text-xl font-semibold">Ariel Troian</h1>
              <h2 className="text-lg text-neutral-300">
                Desenvolvedor Full Stack
              </h2>
              <p className="mt-3">
                Entusiasta e apaixonado por tecnologia e desenvolvimento de
                software, compartilho aqui alguns dos meus estudos e projetos
                pessoais.
              </p>
              <div className="flex pt-3 gap-4 items-center justify-center">
                <Button variant="ghost" size="icon">
                  <ExternalLink href="https://linkedin.com/in/arieltroian">
                    <Linkedin />
                  </ExternalLink>
                </Button>
                <Button variant="ghost" size="icon">
                  <ExternalLink href="https://github.com/arieltroian">
                    <LinkIcon />
                  </ExternalLink>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Card className="p-1 w-full  lg:w-8/12">
          <CardContent className="flex flex-col ">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Linguagens</AccordionTrigger>
                <AccordionContent className="flex flex-wrap gap-2">
                  <Badge>JavaScript</Badge>
                  <Badge>TypeSecript</Badge>
                  <Badge>Python</Badge>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>Front-End</AccordionTrigger>
                <AccordionContent className="flex flex-wrap gap-2">
                  <Badge>HTML</Badge>
                  <Badge>CSS</Badge>
                  <Badge>React</Badge>
                  <Badge>Next.js</Badge>
                  <Badge>Tailwind CSS</Badge>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>Back-End</AccordionTrigger>
                <AccordionContent className="flex flex-wrap gap-2">
                  <Badge>Node</Badge>
                  <Badge>Fastify</Badge>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>Banco de dados</AccordionTrigger>
                <AccordionContent className="flex flex-wrap gap-2 ">
                  <Badge>MongoDB</Badge>
                  <Badge>Supabase</Badge>
                  <Badge>Prisma</Badge>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default HomePage;
