import CommunitySection from "./Sections/CommunitySection";
import CopconPlanSection from "./Sections/CopconPlanSection";
import CopconsSection from "./Sections/CopconsSection";
import CustomerSection from "./Sections/CustomerSection";
import Footer from "./Sections/Footer";
import FounderSection from "./Sections/FounderSection";
import HeroSection from "./Sections/HeroSection";
import Marquee from "./Sections/Marqueu";
import Navbar from "./Sections/Navbar";
import ProPlan from "./Sections/ProPlan";
import Rings from "./Sections/Rings";

export default function Home() {
  return (
<div className=" relative  w-full overflow-hidden  bg-white">
  <Navbar/>
<HeroSection/>
<Marquee/>
<CopconsSection/>
<div className="w-full flex justify-center items-center">
  <CommunitySection/>
</div>
<ProPlan/>
<FounderSection/>
<CustomerSection/>
<CopconPlanSection/>
<Footer/>
</div>
  );
}
