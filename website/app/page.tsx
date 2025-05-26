
import { Footer } from "./components/Footer";
import { NavBar } from "./components/Navbar";
import { About } from "./pages/About";
import { Glimpse } from "./pages/Glimpse";
import { Hero } from "./pages/Hero";
import { Speakers } from "./pages/Speakers";
import { Team } from "./pages/Team";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About/>
      <Glimpse />
      <Team/>
      <Speakers />
      <Footer />
      
    </div>
  );
}
