import { SPECIALIZATIONS } from "../../data/constants";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-16 lg:px-32">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
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
              Привет! Я — Рената Герей, профессиональный визажист, стилист по прическам, гримёр и бровист
              из Калининграда. С 2011 года я создаю образы, которые отражают
              индивидуальность каждой клиентки.
            </p>
            <p>
              За эти годы я поработала с популярными звёздами кино и шоу-бизнеса, участвовала
              в съёмках в качестве визажиста и гримера для клипов, кино, реклам, телеканалов, театральных постановок и fashion-проектов.
            </p>
            <p>
              Также явялюсь ведущим свадебным стилистом Калининграда.
            </p>
            <p>
              Постоянно совершенствую навыки и прохожу мастер-классы. Работаю с профессиональной, качественной
              косметикой класса люкс: Tom Ford, Chanel, MAC, Charlotte Tilbury, NARS и другими
            </p>
          </div>

          <div className="flex gap-6 mt-8">
            {[
              
              { num: "15+", label: "лет опыта" },
              { num: "30+", label: "звёзд" },
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
  );
}