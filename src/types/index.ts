export interface User {
  api_token: string;
  image: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  city_id: number;
}

export interface Product {
  name: string;
  brand: string;
  price: number;
  discount: number;
  priceBeforeDiscount: number;
  id: number;
  image: string;
  category: string;
  description: string;
  model: string;
  images: string[];
  quantity: number;
  uniqueId: number;
}

export interface MainContent {
  icon: string;
  image: string;
  title: string;
  paragraph: string;
}

export interface Settings {
  facebook: string;
  instagram: string;
  twitter: string;
  linkIn: string;
  email: string;
  address: string;
  phone: string;
}

export interface Swiper {
  banner: string;
  link: string;
}

export interface Category {
  id: number;
  name: string;
  image: string;
  categories: Category[][];
}

export interface Brand {
  id: number;
  name: string;
  logo: string;
}