import Benefits from "../components/Benifits";
import Discover from "../components/Home/Discover";
import Front from "../components/Home/Front";
 import HowItWorks from "../components/Home/HowItWorks";
 import Quiz from "../components/Home/Quiz";
import Stats from "../components/Home/Stats";
 import Trusted from "../components/Home/Trusted";
import WhyChooseUs from "../components/Home/Whychooseus";
 import EligibilityCriteria from "./EligibalityArea";
import FAQ from "./Faq";
import Testimonials from "./Testomonial";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function MainHome({ isOpen, setIsOpen }) {
  return (
    <main>
      <Carousel transitionTime={0.3} autoPlay={true} infiniteLoop={true} showThumbs={false} showStatus={false} >
        <Front isOpen={isOpen} setIsOpen={setIsOpen} img={'bg-homefrontbg4'} isOpen={isOpen} setIsOpen={setIsOpen} />
        <Front isOpen={isOpen} setIsOpen={setIsOpen} img={'bg-homefrontbg5'} isOpen={isOpen} setIsOpen={setIsOpen} />
        <Front isOpen={isOpen} setIsOpen={setIsOpen} img={'bg-homefrontbg6'} isOpen={isOpen} setIsOpen={setIsOpen} />
        <Front isOpen={isOpen} setIsOpen={setIsOpen} img={'bg-homefrontbg7'} isOpen={isOpen} setIsOpen={setIsOpen} />
      </Carousel>

      <WhyChooseUs />
      <Stats />
      {/* <Funds /> */}
      <Quiz isOpen={isOpen} setIsOpen={setIsOpen} />
      <Discover />
      <Benefits />
      <HowItWorks />
      {/* <News /> */}
      {/* <Stories /> */}
      <EligibilityCriteria />

      <FAQ />
      <Testimonials />
      <Trusted />
    </main>
  );
}
