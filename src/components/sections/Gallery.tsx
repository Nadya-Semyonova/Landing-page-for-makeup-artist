import { GALLERY_PHOTOS } from "../../data/constants";
import { Card } from "../../app/components/ui/card";
import { AspectRatio } from "../../app/components/ui/aspect-ratio";

export default function Gallery() {
  return (
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

        {/* Сетка для 8 фото: 2 колонки на мобилке, 3 на планшете, 4 на десктопе */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {GALLERY_PHOTOS.map((photo) => (
            <Card key={photo.id} className="overflow-hidden group bg-muted border-0">
              <AspectRatio ratio={4 / 5}>
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
              </AspectRatio>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}