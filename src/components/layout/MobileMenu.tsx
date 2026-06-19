import { NAV_ITEMS } from "../../data/constants";

interface MobileMenuProps {
  menuOpen: boolean;
  scrollTo: (id: string) => void;
}

export default function MobileMenu({ menuOpen, scrollTo }: MobileMenuProps) {
  if (!menuOpen) return null;

  return (
    <div className="fixed inset-0 z-40 bg-background flex flex-col items-center justify-center gap-8">
      {NAV_ITEMS.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollTo(item.id)}
          className="text-2xl tracking-widest uppercase text-primary hover:text-accent transition-colors"
          style={{ fontFamily: "'Cormorant Infant', serif" }}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}