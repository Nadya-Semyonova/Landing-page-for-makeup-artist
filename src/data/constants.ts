
const basePath = import.meta.env.BASE_URL;

export const ARTIST_PHOTO = `${basePath}images/hero.jpg`;

export const GALLERY_PHOTOS = [
  { id: 1, url: `${basePath}images/1.jpg`, label: "Гламурный образ" },
  { id: 2, url: `${basePath}images/2.jpg`, label: "Вечерний макияж" },
  { id: 3, url: `${basePath}images/3.jpg`, label: "Свадебный образ" },
  { id: 4, url: `${basePath}images/4.jpg`, label: "Fashion-съёмка" },
  { id: 5, url: `${basePath}images/5.png`, label: "Праздничный образ" },
  { id: 6, url: `${basePath}images/6.png`, label: "Профессиональная съёмка" },
  { id: 7, url: `${basePath}images/7.jpg`, label: "Студийная съёмка" },
  { id: 8, url: `${basePath}images/8.jpg`, label: "Креативный образ" },
];
// Навигация
export const NAV_ITEMS = [
  { label: "Обо мне", id: "about" },
  { label: "Портфолио", id: "gallery" },
  { label: "Услуги", id: "prices" },
  { label: "Контакты", id: "contacts" },
];
export const SERVICES = [
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

export const SPECIALIZATIONS = [
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
