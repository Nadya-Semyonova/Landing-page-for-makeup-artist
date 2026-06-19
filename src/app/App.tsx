import { useState } from "react";
import Navigation from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Gallery from "../components/sections/Gallery";
import Prices from "../components/sections/Prices";
import Reviews from "../components/sections/Reviews";
import Contacts from "../components/sections/Contacts";
import { useScrollTo } from "../hooks/useScrollTo";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollTo = useScrollTo(() => setMenuOpen(false));

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollTo={scrollTo} />
      <Hero scrollTo={scrollTo} />
      <About />
      <Gallery />
      <Prices />
      <Reviews />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;