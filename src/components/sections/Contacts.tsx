import { Phone, Send, Instagram, MessageCircle } from "lucide-react";
import { Card } from "../../app/components/ui/card";

export default function Contacts() {
  return (
    <section id="contacts" className="py-24 px-6 md:px-16 lg:px-32 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-accent uppercase tracking-[0.25em] text-xs mb-4">
            Связаться
          </p>
          <h2
            className="text-primary"
            style={{
              fontFamily: "'Cormorant Infant', serif",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 400,
            }}
          >
            Записаться <em>ко мне</em>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto" style={{ fontWeight: 300 }}>
            Свяжитесь любым удобным способом — отвечаю в течение часа в рабочее время.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <a
            href="tel:+79991234567"
            className="flex flex-col items-center gap-3 p-7 bg-card border border-border hover:border-accent transition-all duration-200 group rounded-sm"
          >
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:bg-accent/10 transition-colors">
              <Phone size={20} className="text-accent" />
            </div>
            <p className="text-xs tracking-widest uppercase text-muted-foreground">Телефон</p>
            <p className="text-primary text-sm" style={{ fontFamily: "'Cormorant Infant', serif", fontSize: "1.1rem" }}>
              +7 999 123-45-67
            </p>
          </a>
          {/* Остальные контакты аналогично... */}
          <a
            href="https://t.me/renata_makeup"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center gap-3 p-7 bg-card border border-border hover:border-accent transition-all duration-200 group rounded-sm"
          >
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:bg-accent/10 transition-colors">
              <Send size={20} className="text-accent" />
            </div>
            <p className="text-xs tracking-widest uppercase text-muted-foreground">Telegram</p>
            <p style={{ fontFamily: "'Cormorant Infant', serif", fontSize: "1.1rem" }} className="text-primary">
              @renata_makeup
            </p>
          </a>
          <a
            href="https://instagram.com/renata_makeup"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center gap-3 p-7 bg-card border border-border hover:border-accent transition-all duration-200 group rounded-sm"
          >
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:bg-accent/10 transition-colors">
              <Instagram size={20} className="text-accent" />
            </div>
            <p className="text-xs tracking-widest uppercase text-muted-foreground">Instagram</p>
            <p style={{ fontFamily: "'Cormorant Infant', serif", fontSize: "1.1rem" }} className="text-primary">
              @renata_makeup
            </p>
          </a>
          <a
            href="https://vk.com/renata_makeup"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center gap-3 p-7 bg-card border border-border hover:border-accent transition-all duration-200 group rounded-sm"
          >
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:bg-accent/10 transition-colors">
              <MessageCircle size={20} className="text-accent" />
            </div>
            <p className="text-xs tracking-widest uppercase text-muted-foreground">ВКонтакте</p>
            <p style={{ fontFamily: "'Cormorant Infant', serif", fontSize: "1.1rem" }} className="text-primary">
              vk.com/renata_makeup
            </p>
          </a>
        </div>

        <div className="mt-10 text-center">
          <p className="text-muted-foreground text-sm" style={{ fontWeight: 300 }}>
            📍 Калининград · Выезд к клиенту по всему городу
          </p>
        </div>
      </div>
    </section>
  );
}