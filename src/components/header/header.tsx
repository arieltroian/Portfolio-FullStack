import Link from "next/link";
import { Card, CardContent } from "../ui/card";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { MenuIcon } from "lucide-react";
import MobileMenu from "./mobileMenu";
import DesktopMenu from "./desktopMenu";

const Header = () => {
  return (
    <>
      <Card className="lg:hidden">
        <CardContent className="flex items-center justify-between pb-0 p-5">
          <Link href="/" className="font-bold text-lg">
            Ariel
          </Link>

          <Sheet>
            <SheetTrigger>
              <Button variant="ghost" size="icon">
                <MenuIcon size={20} />
              </Button>
            </SheetTrigger>

            <SheetContent>
              <MobileMenu />
            </SheetContent>
          </Sheet>
        </CardContent>
      </Card>

      <div className="max-lg:hidden">
        <DesktopMenu />
      </div>
    </>
  );
};

export default Header;
