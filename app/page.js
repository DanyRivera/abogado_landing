import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Abogados from "./components/Abogados";
import Services from "./components/Services";
import Reviews from "./components/Reviews";
import Cita from "./components/Cita";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Abogados />
      <Services />
      <Reviews />
      <Cita />
    </>
  );
}
