import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

const Header = () => {
  return (
    <nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="default" size="icon" className="fixed top-[1rem]">
            <MenuIcon size={22} />
          </Button>
        </SheetTrigger>

        <SheetContent>
          <div className="flex flex-col pl-6 pt-5 gap-4">
            <Link
              href="/"
              className="transition ease-out duration-300 hover:text-primary hover:-translate-y-1 hover:scale-110"
            >
              Home
            </Link>
            <Link
              href="#projetos"
              className="transition ease-out duration-300 hover:text-primary hover:-translate-y-1 hover:scale-110"
            >
              Projetos
            </Link>
            <Link
              href="#contato"
              className="transition ease-out duration-300 hover:text-primary hover:-translate-y-1 hover:scale-110"
            >
              Contato
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Header;
