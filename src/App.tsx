import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";

export default function App() {
  return (
    <main className="relative overflow-hidden bg-[#050816] text-white">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
