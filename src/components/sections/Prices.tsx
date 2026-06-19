import { useState } from "react";
import { SERVICES } from "../../data/constants";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../app/components/ui/tabs";
import { Card } from "../../app/components/ui/card";

export default function Prices() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
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

        <Tabs
          value={String(activeCategory)}
          onValueChange={(val) => setActiveCategory(Number(val))}
          className="w-full"
        >
          <TabsList className="flex flex-wrap gap-2 justify-center mb-10 bg-transparent h-auto">
            {SERVICES.map((s, i) => (
              <TabsTrigger
                key={s.category}
                value={String(i)}
                className="px-5 py-2 text-sm tracking-wide border transition-all duration-200 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary border-border text-muted-foreground hover:border-accent hover:text-accent"
              >
                {s.category}
              </TabsTrigger>
            ))}
          </TabsList>

          {SERVICES.map((s, i) => (
            <TabsContent key={s.category} value={String(i)}>
              <Card className="border-border rounded-sm overflow-hidden">
                {s.items.map((item, idx) => (
                  <div
                    key={item.name}
                    className={`flex justify-between items-center px-6 py-5 ${
                      idx < s.items.length - 1 ? "border-b border-border" : ""
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
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        <p className="text-center text-muted-foreground text-sm mt-6" style={{ fontWeight: 300 }}>
          Точная стоимость рассчитывается индивидуально после консультации.
          <br />
          Предоплата 30% при бронировании даты.
        </p>
      </div>
    </section>
  );
}