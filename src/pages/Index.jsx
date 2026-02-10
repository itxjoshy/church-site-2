import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Events } from "@/components/Events";
import { Connect } from "@/components/Connect";
import { Visit } from "@/components/Visit";
import { Footer } from "@/components/Footer";
import { Carousel } from "@/components/Carousel";
import { Pastor } from "@/components/Pastor";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Pastor />
        <Events />
        <Connect />
        <Carousel />
        <Visit />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
