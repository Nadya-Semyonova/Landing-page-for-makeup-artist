export interface NavItem {
  label: string;
  id: string;
}

export interface GalleryPhoto {
  id: number;
  url: string;
  label: string;
}

export interface ServiceItem {
  name: string;
  price: string;
}

export interface ServiceCategory {
  category: string;
  items: ServiceItem[];
}

export interface Specialization {
  icon: string;
  title: string;
  desc: string;
}