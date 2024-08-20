import Wrapper from "../../Wrapper";
import EarnCard from "./EarnCard";
import Features from "./Features";
import Hero from "./Hero";
import Info from "./Info";
import Services from "./Services";
import Testimonial from "./Testimonial";
import WhyChoose from "./WhyChoose";

const Home = () => {
  return (
    <div className="mb-10">
      <div className="md:h-[85vh] h-[110vh] w-full bg-dot-white/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 sm:flex hidden items-center justify-center bg-[#100f10] [mask-image:radial-gradient(ellipse_at_center,transparent_65%,black)]"></div>
        <Hero />
      </div>
      <Wrapper>
        <Info />
        <Services />
        <EarnCard />
        <Features />
        <WhyChoose />
      </Wrapper>
      <Testimonial />
    </div>
  );
};

export default Home;
