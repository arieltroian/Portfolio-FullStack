import ExternalLink from "@/components/externalLink";
import { Button } from "@/components/ui/button";
import { IoMdMail } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";

const ContactPage = () => {
  return (
    <section
      id="contato"
      className="flex flex-col items-center justify-center h-screen mb-[-4.4rem]"
    >
      <h1 className="text-2xl font-bold mb-8">Conecte-se comigo!</h1>
      <div className=" flex flex-col items-center justify-center">
        <h2 className="text-xl mb-3">Você pode me encontrar por aqui:</h2>
        <div className="flex gap-4">
          <Button variant="ghost" size="icon">
            <ExternalLink href="https://linkedin.com/in/arieltroian">
              <FaLinkedinIn size={30} />
            </ExternalLink>
          </Button>
          <Button variant="ghost" size="icon">
            <ExternalLink href="https://github.com/arieltroian">
              <IoLogoGithub size={30} />
            </ExternalLink>
          </Button>
          <Button variant="ghost" size="icon">
            <ExternalLink href="mailto:arieltroian@outlook.com">
              <IoMdMail size={30} />
            </ExternalLink>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
