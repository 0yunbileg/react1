import Image from "next/image";
import Slider from "@/components/slider/slider";
import Cards from "@/components/cards/cards";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Slider />
      <Cards />
    </div>
  );
}
