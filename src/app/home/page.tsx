import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LinkIcon, Linkedin } from "lucide-react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const HomePage = () => {
  return (
    <section className="flex items-center justify-center mt-[-6rem] lg:mt-[-4rem]">
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
              <h2 className="text-lg text-slate-400">
                Desenvolvedor Full Stack
              </h2>
              <p className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
                vitae vel corrupti quia autem. Aliquid maxime repudiandae sit!
                Reprehenderit asperiores ius
              </p>
              <div className="flex pt-3 gap-3 items-center justify-center">
                <Button variant="ghost" size="icon">
                  <Linkedin />
                </Button>
                <Button variant="ghost" size="icon">
                  <LinkIcon />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Card className="p-2 lg:p-4 my-1 w-full sm:px-1 lg:w-8/12">
          <CardContent className="flex flex-col items-center justify-center">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Linguagens favoritas</AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Autem, placeat?
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>Frameworks e Libs</AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Autem, placeat?
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>ORM e Banco de dados</AccordionTrigger>
                <AccordionContent>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Autem, placeat?
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
