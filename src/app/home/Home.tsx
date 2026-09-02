//import { Noto_Sans_Thai } from "next/font/google";
import { SectionCategories,  SectionTotal } from "@/components/home";
import { IntroSection } from "@/components/home/intro/IntroSection";
import BasicLayout from "@/layouts/basic/BasicLayout";


const Home = () => {
  return (
    <BasicLayout>
        <div className="font-serif">
            <IntroSection/>
            <SectionTotal/>
            <SectionCategories/>
        </div>
    </BasicLayout>
  );
}

export default Home;