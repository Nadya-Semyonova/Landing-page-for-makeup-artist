import { useState } from "react";
import { Phone, Send, Instagram, MessageCircle, Star, ChevronDown, Menu, X } from "lucide-react";

/* MARKER-MAKE-KIT-INVOKED */

const ARTIST_PHOTO = "https://images.unsplash.com/photo-1719346253441-f42f125f4d7c?w=900&h=1200&fit=crop&auto=format";

const GALLERY_PHOTOS = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1596205521983-9c372fb3d4f1?w=600&h=750&fit=crop&auto=format",
    label: "Гламурный образ",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1595550912256-b24059bb08e8?w=600&h=750&fit=crop&auto=format",
    label: "Вечерний макияж",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1610047614301-13c63f00c032?w=600&h=750&fit=crop&auto=format",
    label: "Свадебный образ",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1611826585949-b0ccabd2c1a4?w=600&h=750&fit=crop&auto=format",
    label: "Fashion-съёмка",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1631549424057-403e75d68e2f?w=600&h=750&fit=crop&auto=format",
    label: "Праздничный образ",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1622336889416-8d790ad807d7?w=600&h=750&fit=crop&auto=format",
    label: "Профессиональная съёмка",
  },
];

const SERVICES = [
  {
    category: "Дневной / Вечерний макияж",
    items: [
      { name: "Дневной макияж", price: "2 500 ₽" },
      { name: "Вечерний / выходной макияж", price: "3 500 ₽" },
      { name: "Макияж на мероприятие", price: "3 000 ₽" },
    ],
  },
  {
    category: "Свадебный макияж",
    items: [
      { name: "Свадебный макияж (невеста)", price: "6 000 ₽" },
      { name: "Свадебный макияж (гостья)", price: "3 500 ₽" },
      { name: "Репетиционный макияж", price: "4 500 ₽" },
    ],
  },
  {
    category: "Съёмочный / Fashion",
    items: [
      { name: "Макияж для фотосъёмки", price: "4 000 ₽" },
      { name: "Макияж для видеосъёмки", price: "4 500 ₽" },
      { name: "Образ для fashion-проекта", price: "от 5 000 ₽" },
    ],
  },
  {
    category: "Дополнительно",
    items: [
      { name: "Выезд к клиенту (в пределах МКАД)", price: "+ 1 000 ₽" },
      { name: "Выезд за МКАД", price: "по договорённости" },
      { name: "Ранний выезд (до 7:00)", price: "+ 1 500 ₽" },
    ],
  },
];

const SPECIALIZATIONS = [
  {
    icon: "✦",
    title: "Свадебный макияж",
    desc: "Создаю нежные и стойкие образы для самого важного дня. Работаю с невестами с 2016 года.",
  },
  {
    icon: "✦",
    title: "Вечерний & Fashion",
    desc: "Смелые, выразительные образы для съёмок, вечеринок и показов.",
  },
  {
    icon: "✦",
    title: "Сценический & TV-грим",
    desc: "Профессиональный грим для сцены, телевидения и видеопроектов.",
  },
  {
    icon: "✦",
    title: "Повседневный образ",
    desc: "Учу создавать красивый макияж самостоятельно — провожу индивидуальные уроки.",
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div
      className="min-h-screen bg-background text-foreground"
      style={{ fontFamily: "'Jost', sans-serif" }}
    >
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 backdrop-blur-md bg-background/80 border-b border-border">
        <span
          style={{ fontFamily: "'Cormorant Infant', serif", letterSpacing: "0.08em" }}
          className="text-primary text-lg tracking-widest uppercase"
        >
          Рената Герей
        </span>

        {/* desktop nav */}
        <div className="hidden md:flex gap-8 text-sm tracking-widest uppercase text-muted-foreground">
          {[
            { label: "Обо мне", id: "about" },
            { label: "Портфолио", id: "gallery" },
            { label: "Услуги", id: "prices" },
            { label: "Контакты", id: "contacts" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="hover:text-accent transition-colors duration-200"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* mobile hamburger */}
        <button
          className="md:hidden text-primary"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-background flex flex-col items-center justify-center gap-8">
          {[
            { label: "Обо мне", id: "about" },
            { label: "Портфолио", id: "gallery" },
            { label: "Услуги", id: "prices" },
            { label: "Контакты", id: "contacts" },
          ].map((item) => (
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
      )}

      {/* HERO */}
      <section className="relative w-full min-h-screen flex items-end">
        <div className="absolute inset-0 bg-primary/10" />
        <img
          src={ARTIST_PHOTO}
          alt="Рената Герей — визажист-гримёр"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        {/* gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(28,20,16,0.85) 0%, rgba(28,20,16,0.2) 50%, transparent 100%)",
          }}
        />

        <div className="relative z-10 w-full px-8 pb-16 md:px-20 md:pb-24">
          <p
            className="uppercase tracking-[0.3em] text-accent mb-3 text-sm"
            style={{ fontFamily: "'Jost', sans-serif" }}
          >
            Визажист · Гримёр
          </p>
          <h1
            className="text-white leading-none mb-6"
            style={{
              fontFamily: "'Cormorant Infant', serif",
              fontSize: "clamp(3rem, 9vw, 7rem)",
              fontWeight: 300,
            }}
          >
            Рената
            <br />
            <em>Герей</em>
          </h1>
          <p
            className="text-white/70 max-w-md mb-8"
            style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "1rem" }}
          >
            Профессиональный макияж для любого образа — от нежного свадебного
            до дерзкого fashion-грима.
          </p>
          <button
            onClick={() => scrollTo("contacts")}
            className="px-8 py-3 border border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300 tracking-widest uppercase text-sm"
          >
            Записаться
          </button>
        </div>

        {/* scroll hint */}
        <button
          onClick={() => scrollTo("about")}
          className="absolute bottom-6 right-8 text-white/50 flex flex-col items-center gap-1 hover:text-accent transition-colors"
        >
          <span className="text-xs tracking-widest uppercase">Далее</span>
          <ChevronDown size={16} className="animate-bounce" />
        </button>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 md:px-16 lg:px-32">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* text */}
          <div>
            <p className="text-accent uppercase tracking-[0.25em] text-xs mb-4">
              Обо мне
            </p>
            <h2
              className="text-primary mb-6 leading-tight"
              style={{
                fontFamily: "'Cormorant Infant', serif",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 400,
              }}
            >
              Более 15 лет <br />
              <em>в профессии</em>
            </h2>
            <div
              className="space-y-4 text-muted-foreground leading-relaxed"
              style={{ fontWeight: 300 }}
            >
              <p>
                Привет! Я — Рената Герей, профессиональный визажист и гримёр
                из Калининграда. С 2011 года я создаю образы, которые отражают
                индивидуальность каждой клиентки.
              </p>
              <p>
                За эти годы я поработала более чем с 1000 невестами, участвовала
                в съёмках в качестве визажиста- гримера для клипов, кино, телеканалов и fashion-проектов.
              </p>
              <p>
                Постоянно совершенствую навыки и прохожу мастер-классы. Работаю с профессиональной, качественной
                косметикой MAC, Charlotte Tilbury, NARS.
              </p>
            </div>

            <div className="flex gap-6 mt-8">
              {[
                { num: "10+", label: "лет опыта" },
                { num: "1000+", label: "невест" },
                { num: "5000+", label: "клиентов" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p
                    className="text-primary"
                    style={{
                      fontFamily: "'Cormorant Infant', serif",
                      fontSize: "2.5rem",
                      fontWeight: 300,
                      lineHeight: 1,
                    }}
                  >
                    {stat.num}
                  </p>
                  <p className="text-muted-foreground text-xs tracking-widest uppercase mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* specializations */}
          <div className="space-y-5">
            {SPECIALIZATIONS.map((s) => (
              <div
                key={s.title}
                className="flex gap-4 p-5 bg-secondary rounded-sm border border-border hover:border-accent transition-colors duration-200"
              >
                <span className="text-accent mt-0.5 text-lg leading-none">{s.icon}</span>
                <div>
                  <p
                    className="text-primary mb-1"
                    style={{ fontFamily: "'Cormorant Infant', serif", fontSize: "1.15rem", fontWeight: 500 }}
                  >
                    {s.title}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed" style={{ fontWeight: 300 }}>
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-24 bg-secondary">
        <div className="max-w-6xl mx-auto px-6 md:px-16">
          <div className="text-center mb-14">
            <p className="text-accent uppercase tracking-[0.25em] text-xs mb-4">
              Портфолио
            </p>
            <h2
              className="text-primary"
              style={{
                fontFamily: "'Cormorant Infant', serif",
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: 400,
              }}
            >
              Примеры <em>работ</em>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {GALLERY_PHOTOS.map((photo) => (
              <div key={photo.id} className="relative group overflow-hidden aspect-[4/5] bg-muted">
                <img
                  src={photo.url}
                  alt={photo.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(to top, rgba(28,20,16,0.7) 0%, transparent 60%)" }}
                >
                  <p className="text-white text-sm tracking-wide">{photo.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICES */}
      <section id="prices" className="py-24 px-6 md:px-16 lg:px-32">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-accent uppercase tracking-[0.25em] text-xs mb-4">
              Стоимость
            </p>
            <h2
              className="text-primary"
              style={{
                fontFamily: "'Cormorant Infant', serif",
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: 400,
              }}
            >
              Прайс-<em>лист</em>
            </h2>
          </div>

          {/* category tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {SERVICES.map((s, i) => (
              <button
                key={s.category}
                onClick={() => setActiveCategory(i)}
                className={`px-5 py-2 text-sm tracking-wide border transition-all duration-200 ${
                  activeCategory === i
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:border-accent hover:text-accent"
                }`}
              >
                {s.category}
              </button>
            ))}
          </div>

          {/* service table */}
          <div className="bg-card border border-border rounded-sm overflow-hidden">
            {SERVICES[activeCategory].items.map((item, idx) => (
              <div
                key={item.name}
                className={`flex justify-between items-center px-6 py-5 ${
                  idx < SERVICES[activeCategory].items.length - 1
                    ? "border-b border-border"
                    : ""
                } hover:bg-secondary transition-colors`}
              >
                <span className="text-foreground" style={{ fontWeight: 300 }}>
                  {item.name}
                </span>
                <span
                  className="text-accent shrink-0 ml-4"
                  style={{
                    fontFamily: "'Cormorant Infant', serif",
                    fontSize: "1.2rem",
                    fontWeight: 500,
                  }}
                >
                  {item.price}
                </span>
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground text-sm mt-6" style={{ fontWeight: 300 }}>
            Точная стоимость рассчитывается индивидуально после консультации.
            <br />
            Предоплата 30% при бронировании даты.
          </p>
        </div>
      </section>

      {/* REVIEWS strip */}
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

      {/* CONTACTS */}
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
            {/* Phone */}
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

            {/* Telegram */}
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
                @anna_makeup
              </p>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/anna_makeup"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center gap-3 p-7 bg-card border border-border hover:border-accent transition-all duration-200 group rounded-sm"
            >
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                <Instagram size={20} className="text-accent" />
              </div>
              <p className="text-xs tracking-widest uppercase text-muted-foreground">Instagram</p>
              <p style={{ fontFamily: "'Cormorant Infant', serif", fontSize: "1.1rem" }} className="text-primary">
                @anna_makeup
              </p>
            </a>

            {/* VK */}
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

      {/* FOOTER */}
      <footer className="bg-primary py-8 px-6 text-center">
        <p
          className="text-primary-foreground/50 text-sm"
          style={{ fontWeight: 300, letterSpacing: "0.1em" }}
        >
          © 2026 Рената Герей · Визажист-гримёр · Калининград
        </p>
      </footer>
    </div>
  );
}
