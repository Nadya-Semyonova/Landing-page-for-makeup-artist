import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "../../data/constants";
import MobileMenu from "./MobileMenu";

interface NavigationProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  scrollTo: (id: string) => void;
}

export default function Navigation({ menuOpen, setMenuOpen, scrollTo }: NavigationProps) {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-background/80 border-b border-border">
        <span
          style={{ fontFamily: "'Cormorant Infant', serif", letterSpacing: "0.08em" }}
          className="text-primary text-lg tracking-widest uppercase"
        >
          Рената Герей
        </span>

        <div className="hidden md:flex gap-8 text-sm tracking-widest uppercase text-muted-foreground">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="hover:text-accent transition-colors duration-200"
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          className="md:hidden text-primary"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      <MobileMenu menuOpen={menuOpen} scrollTo={scrollTo} />
    </>
  );
}