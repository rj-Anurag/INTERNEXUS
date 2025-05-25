
import { NavBar } from "./components/Navbar";
import { About } from "./pages/About";
import { Glimpse } from "./pages/Glimpse";
import { Hero } from "./pages/Hero";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About/>
      <Glimpse />
    </div>
  );
}
