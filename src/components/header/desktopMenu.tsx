import { Card, CardContent } from "../ui/card";
import Link from "next/link";

const DesktopMenu = () => {
  return (
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
  );
};

export default DesktopMenu;
