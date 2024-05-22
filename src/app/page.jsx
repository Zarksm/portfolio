import { Hero } from "@/components/index";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen bg-zinc-950 text-white">
        <Hero />
      </div>
    </>
  );
}
