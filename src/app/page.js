import Firstsection from "@/component/First-section/First-section";
import ProductCard from "@/component/ProductSection/ProductCard";


export default function Home() {
  return (
    <div className="bg-white">
     <main className="container mx-auto px-4 py-8">

      <Firstsection/>
      <ProductCard />
    </main>
    </div>
  );
}
