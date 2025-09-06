import Image from "next/image";
import Sidebar from "@/components/sidebar";
import MainSection from "@/components/mainSection";

export default function Home() {
  return (
    <main className="flex">
      <Sidebar />
      <MainSection/>
    </main>
  );
}
