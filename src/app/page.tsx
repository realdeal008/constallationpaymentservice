"use client";
import ConstellationCanvas from "@/components/ConstellationCanvas";
import Hero from "@/components/sections/Hero";
import Navbar from "@/components/sections/Navbar";
import About from "@/components/sections/About";
import Services from "@/components/sections/Service";
import Careers from "@/components/sections/Career";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/Footer";
export default function Home() {
  return (
    <div className="overlay">
      <ConstellationCanvas />
        
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Careers />
        <Contact />
        <Footer />
    </div>
  );
}
