import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import HomeHero from '@/components/HomeHero';
import CategoriesSection from '@/components/CategoriesSection';
import ArticlesSection from '@/components/ArticlesSection';
import ProductsSection from '@/components/ProductsSection';
import BrandsSection from '@/components/BrandsSection';
import SmartHomeSection from '@/components/SmartHomeSection';
import { Settings, Swiper, Category, Product, MainContent, Brand } from '@/types';

// Mock data - replace with actual API calls
const mockSettings: Settings = {
  facebook: 'https://facebook.com/alhayatsmart',
  instagram: 'https://instagram.com/alhayatsmart',
  twitter: 'https://twitter.com/alhayatsmart',
  linkIn: 'https://linkedin.com/company/alhayatsmart',
  email: 'info@alhayatsmart.com',
  address: 'Cairo, Egypt',
  phone: '01206569999'
};

const mockSwiper: Swiper[] = [
  {
    banner: '/smart-image/sec1-home.jpg',
    link: '#'
  }
];

const mockCategories: Category[] = [
  {
    id: 1,
    name: 'Smart Lighting',
    image: '/smart-image/category1.jpg',
    categories: [[
      { id: 11, name: 'LED Bulbs', image: '/smart-image/led-bulbs.jpg', categories: [] },
      { id: 12, name: 'Smart Switches', image: '/smart-image/switches.jpg', categories: [] }
    ]]
  }
];

const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Smart LED Bulb',
    brand: 'Philips',
    price: 299,
    discount: 10,
    priceBeforeDiscount: 329,
    image: '/smart-image/product1.jpg',
    category: 'lighting',
    description: 'Smart LED bulb with WiFi connectivity',
    model: 'PH-LED-001',
    images: ['/smart-image/product1.jpg'],
    quantity: 1,
    uniqueId: 1
  }
];

const mockMainContent: MainContent[] = [
  {
    icon: '/smart-image/icon-light.svg',
    image: '/smart-image/im-sec-four.jpg',
    title: 'Smart Lighting Solutions',
    paragraph: 'Transform your home with intelligent lighting systems that adapt to your lifestyle and preferences.'
  }
];

const mockBrands: Brand[] = [
  {
    id: 1,
    name: 'Philips',
    logo: '/smart-image/philips-logo.png'
  }
];

export default function Home() {
  return (
    <main>
      <NavBar 
        user={null} 
        basketCount={0} 
        settings={mockSettings} 
      />
      
      <HomeHero 
        swiper={mockSwiper} 
        settings={mockSettings} 
      />
      
      <CategoriesSection categories={mockCategories} />
      
      <ArticlesSection mainContent={mockMainContent} />
      
      <ProductsSection products={mockProducts} />
      
      <SmartHomeSection />
      
      <BrandsSection brands={mockBrands} />
      
      <Footer settings={mockSettings} />
    </main>
  );
}