import Image from "next/image";
import Hero from "@/components/hero/hero";
import FunFacts from "@/components/homeSections/FunFacts";

export default function Home() {
  return (
    <div className="flex flex-col gap-[100px]">
      <Hero />
      <FunFacts />
    </div>
  );
}
