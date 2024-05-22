import { Navlinks } from "@/lib/constant";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center py-8 container max-w-7xl mx-auto bg-zinc-950 text-white border-b border-zinc-400">
      <div>
        <Link href={"/"} className="font-bold text-3xl textAnim cursor-pointer">
          RNID
        </Link>
      </div>
      <nav className="flex gap-10 uppercase">
        {Navlinks.map((link) => (
          <div key={link.id}>
            <Link href={link.link} className="textAnim">
              {link.name}
            </Link>
          </div>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
