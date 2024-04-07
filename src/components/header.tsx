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
      <Card className="lg:hidden">
        <CardContent className="flex items-center justify-between pb-0 p-5">
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
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col pt-5 gap-4">
                <Link href="/">Home</Link>
                <Link href="/">Sobre</Link>
                <Link href="/">Projetos</Link>
              </div>
            </SheetContent>
          </Sheet>
        </CardContent>
      </Card>

      <div className="max-lg:hidden">
        <Card className="w-full ">
          <CardContent className="flex items-center justify-center gap-x-20 pb-0 p-5">
            <Link href="/" className="font-bold text-lg">
              Home
            </Link>
            <Link href="/" className="font-bold text-lg">
              Sobre
            </Link>
            <Link href="/" className="font-bold text-lg">
              Projetos
            </Link>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Header;
