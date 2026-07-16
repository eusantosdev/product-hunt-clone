import ProductsList from "@/components/features/ProductsList";
import TrandingTopics from "@/components/features/TrandingTopics";
import Sidebar from "@/components/features/Sidebar";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <TrandingTopics/>
        <div className="max-w-screen-xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-2/3">
              <ProductsList/>
            </div>
            <div className="w-full md:w-1/3">
              <Sidebar/>
            </div>
          </div>
        </div>
      <Footer/>
    </>
  );
}
