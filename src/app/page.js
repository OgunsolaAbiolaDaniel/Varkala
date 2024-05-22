import DealOfTheWeek from "@/component/DealWeek/DealWeek";
import Firstsection from "@/component/First-section/First-section";
import ProductCard from "@/component/ProductSection/ProductCard";
import Secondsection from "@/component/Second-section/Secondsection";

export default function Home() {
  return (
    <div className="bg-white m-0 p-0">
      <main>
        <Firstsection />
        <Secondsection />
        <ProductCard />
        <DealOfTheWeek />
      </main>
    </div>
  );
}
