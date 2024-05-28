import Dealsection from "@/component/Dealsection/Dealsection";
import Firstsection from "@/component/First-section/First-section";
import Footer from "@/component/Footer/Footer";
import HistorySection from "@/component/HistorySection/HistorySection";
import ProductSection from "@/component/ProductSection/ProductSection";
import Secondsection from "@/component/Second-section/Secondsection";
import BannerSection from "@/component/BannerServiceSection/BannerSection";

export default function Home() {
  return (
    <div className="bg-white m-0 p-0">
      <main>
        <Firstsection />
        <Secondsection />
        <ProductSection />
        <Dealsection />
        <HistorySection />
        <BannerSection />
        <Footer />
      </main>
    </div>
  );
}
