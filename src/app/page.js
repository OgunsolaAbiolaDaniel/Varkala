import Firstsection from "@/component/First-section/First-section";
import ProductCard from "@/component/ProductSection/ProductCard";
import Popover from "@/component/ProductSection/ProductPopup";

export default function Home() {
  return (
    <div className="bg-white">
     <main className="container mx-auto ">

      <Firstsection/>
      <ProductCard />
      <Popover />
    </main>
    </div>
  );
}
