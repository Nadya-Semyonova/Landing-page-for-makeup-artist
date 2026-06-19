import { Star } from "lucide-react";

export default function Reviews() {
  return (
    <div className="bg-primary py-10 px-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 text-center">
        <div className="flex gap-1 justify-center">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star key={s} size={16} className="fill-accent text-accent" />
          ))}
        </div>
        <p
          className="text-primary-foreground/80 max-w-lg"
          style={{ fontFamily: "'Cormorant Infant', serif", fontSize: "1.2rem", fontStyle: "italic", fontWeight: 300 }}
        >
          «Рената — настоящий мастер своего дела! Свадебный макияж держался весь день,
          а образ превзошёл все ожидания!»
        </p>
        <p className="text-accent text-sm tracking-widest uppercase shrink-0">
          Мария К.
        </p>
      </div>
    </div>
  );
}