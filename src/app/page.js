import About from "@/components/template/index/About/About";
import Banner from "@/components/template/index/Banner/Banner";
import Blog from "@/components/template/index/Blog/Blog";
import Brief from "@/components/template/index/Brief/Brief";
import Country from "@/components/template/index/Country/Country";
import Cultivation from "@/components/template/index/Cultivation/Cultivation";
import FeedBack from "@/components/template/index/FeedBack/FeedBack";
import Newsletter from "@/components/template/index/Newsletter/Newsletter";
import Question from "@/components/template/index/Question/Question";
import Sectors from "@/components/template/index/Sectors/Sectors";
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
   <Cultivation/>
   <Brief/>
   <Sectors/>
   <Question/>
   <FeedBack/>
   <Blog/>
   <Newsletter/>
   </>
  );
}
