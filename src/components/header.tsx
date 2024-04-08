import Link from "next/link";
import { Card, CardContent } from "./ui/card";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

const Header = () => {
  return (
    <>
      <Card className="lg:hidden rounded-full">
        <CardContent className="flex items-center justify-between pb-0 p-5 mx-4">
          <Link href="/" className="font-bold text-lg">
            Ariel
          </Link>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <MenuIcon size={20} />
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
                  href="#contatos"
                  className="transition ease-out duration-300 hover:text-primary hover:-translate-y-1 hover:scale-110"
                >
                  Contato
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </CardContent>
      </Card>

      <div className="max-lg:hidden">
        <Card className="w-full rounded-full">
          <CardContent className="flex items-center justify-center gap-x-20 pb-0 p-4">
            <Link
              href="/"
              className="text-lg transition ease-out duration-300 hover:text-primary hover:-translate-y-1 hover:scale-110"
            >
              Home
            </Link>
            <Link
              href="#projetos"
              className="text-lg transition ease-out duration-300 hover:text-primary hover:-translate-y-1 hover:scale-110"
            >
              Projetos
            </Link>
            <Link
              href="#contato"
              className="text-lg transition ease-out duration-300 hover:text-primary hover:-translate-y-1 hover:scale-110"
            >
              Contato
            </Link>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Header;
