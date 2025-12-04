import About from "./components/about";
import Contact from "./components/contact";
import Education from "./components/education";
import Experience from "./components/experience";
import FloatingButton from "./components/FloatingButton";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Skills from "./components/skill";
import SparkleEffect from "./components/SparkleEffect";


export default function Home() {
  return (
    <>
      <SparkleEffect />
      <main className="px-6 md:px-20 lg:px-40 py-10 pt-24 space-y-32">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Experience />
        <Contact />
      </main>
      <FloatingButton />
    </>
  );
}
