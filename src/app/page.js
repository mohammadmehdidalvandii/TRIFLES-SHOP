import About from "@/components/template/index/About/About";
import Banner from "@/components/template/index/Banner/Banner";
import Country from "@/components/template/index/Country/Country";
import Shop from "@/components/template/index/Shop/Shop";
import Triple from "@/components/template/index/Triple/Triple";

export default function Home() {
  return (
   <>
   <Banner/>
   <Triple/>
   <About/>
   <Country/>
   <Shop/>
   </>
  );
}
