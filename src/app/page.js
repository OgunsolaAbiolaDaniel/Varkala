import Firstsection from "@/component/First-section/First-section";
import ProductSection from "@/component/ProductSection/ProductSection";
import Secondsection from "@/component/Second-section/Secondsection";

export default function Home() {
  return (
    <div className="bg-white m-0 p-0">
      <main>
        <Firstsection />
        <Secondsection />
        <ProductSection />
      </main>
    </div>
  );
}
