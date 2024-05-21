import DealOfTheWeek from "@/component/DealWeek/DealWeek";
import Firstsection from "@/component/First-section/First-section";
import SecondSection from "@/component/Second-Section/SecondSection";

export default function Home() {
  return (
    <div className="bg-white">
      <main className="container mx-auto"> 
        <Firstsection />
        <SecondSection />
        <DealOfTheWeek />
      </main>
    </div>
  );
}
