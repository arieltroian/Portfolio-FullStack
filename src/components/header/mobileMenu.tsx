import { SheetHeader, SheetTitle } from "../ui/sheet";
import Link from "next/link";

const MobileMenu = () => {
  return (
    <>
      <SheetHeader>
        <SheetTitle>Menu</SheetTitle>
      </SheetHeader>
      <div className="flex flex-col pt-5 gap-4">
        <Link href="/">Home</Link>
        <Link href="/">Sobre</Link>
        <Link href="/">Projetos</Link>
      </div>
    </>
  );
};

export default MobileMenu;
