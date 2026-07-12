import ProductsList from "@/components/ProductsList";
import TrandingTopics from "@/components/TrandingTopics";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <TrandingTopics/>
        <div className="max-w-screen-xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-2/3">
              <ProductsList />
            </div>
            <div className="w-full md:w-1/3">
              <Sidebar />
            </div>
          </div>
        </div>
      <Footer/>
    </>
  );
}
