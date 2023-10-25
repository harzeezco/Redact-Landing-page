import Features from "@/components/sections/Features";
import HeroSection from "@/components/sections/Hero";
import StartCreating from "@/components/sections/StartCreating";
import Template from "@/components/sections/Template";
import Testimonials from "@/components/sections/Testimonials";
import Trusted from "@/components/sections/Trusted";

function Main() {
  return (
    <main>
      <HeroSection />
      <Template />
      <Features />
      <Testimonials />
      <Trusted />
      <StartCreating />
    </main>
  );
}

export default Main;
