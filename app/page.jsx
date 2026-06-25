import About from "@/sections/About";
import Contact from "@/ui/Footer";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Navbar from "@/ui/Navbar";

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
}