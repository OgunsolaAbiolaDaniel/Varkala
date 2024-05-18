import Firstsection from "@/component/First-section/First-section";
import ProductCard from "@/component/ProductSection/ProductCard";


export default function Home() {
  return (
    <div className="bg-white m-0 p-0">
     <main>
        <Firstsection />
        <ProductCard />
    </main>
    </div>
  );
}
