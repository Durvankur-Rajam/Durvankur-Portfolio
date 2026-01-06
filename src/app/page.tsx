import { About } from "./sections/About";
import { Hero } from "./sections/Hero";
import TechStack from "./sections/TechStack";

export default function Home() {
  return (
    <div>
      <div className="bg"></div>
      <Hero />
      <TechStack />
      <About />
    </div>
  );
}


