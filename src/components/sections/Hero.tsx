import { ChevronDown } from "lucide-react";
import { Button } from "../../app/components/ui/button";
import { ARTIST_PHOTO } from "../../data/constants";

interface HeroProps {
  scrollTo: (id: string) => void;
}

export default function Hero({ scrollTo }: HeroProps) {
  return (
    <section className="relative w-full min-h-screen flex items-center">
      {/* Фон */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Контейнер с изображением и текстом */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid md:grid-cols-2 gap-8 items-center py-20">
        {/* Изображение слева */}
        <div className="order-2 md:order-1 flex justify-center">
          <div className="relative w-[90%] max-w-md aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={ARTIST_PHOTO}
              alt="Рената Герей — визажист-гримёр"
              className="w-full h-full object-cover object-top"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(28,20,16,0.3) 0%, transparent 60%)",
              }}
            />
          </div>
        </div>

        {/* Текст справа */}
        <div className="order-1 md:order-2 text-center md:text-left">
          <p
            className="uppercase tracking-[0.3em] text-accent mb-3 text-sm"
            style={{ fontFamily: "'Jost', sans-serif" }}
          >
            Визажист · Гримёр · Стилист по прическам · Бровист
          </p>
          <h1
            className="text-primary leading-none mb-6"
            style={{
              fontFamily: "'Cormorant Infant', serif",
              fontSize: "clamp(3rem, 8vw, 6rem)",
              fontWeight: 300,
            }}
          >
            Рената
            <br />
            <em>Герей</em>
          </h1>
          <p
            className="text-muted-foreground max-w-md mx-auto md:mx-0 mb-8"
            style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "1rem" }}
          >
            Создание любого образа — от нежного свадебного
            до дерзкого fashion и грима.
          </p>
          <Button
            onClick={() => scrollTo("contacts")}
            variant="outline"
            className="border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300 tracking-widest uppercase text-sm px-8 py-3"
          >
            Записаться
          </Button>
        </div>
      </div>

      <button
        onClick={() => scrollTo("about")}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground/50 flex flex-col items-center gap-1 hover:text-accent transition-colors z-10"
      >
        <span className="text-xs tracking-widest uppercase">Далее</span>
        <ChevronDown size={16} className="animate-bounce" />
      </button>
    </section>
  );
}