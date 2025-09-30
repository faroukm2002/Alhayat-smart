# Angular to Next.js Migration

This project has been migrated from Angular to Next.js App Router with TypeScript and Bootstrap CSS.

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles with Bootstrap and custom fonts
│   ├── layout.tsx           # Root layout with Bootstrap and FontAwesome
│   └── page.tsx             # Home page component
├── components/
│   ├── NavBar.tsx           # Navigation bar component
│   ├── Footer.tsx           # Footer component
│   ├── HomeHero.tsx         # Hero section with swiper
│   ├── CategoriesSection.tsx # Categories display
│   ├── ArticlesSection.tsx  # Articles/content section
│   ├── ProductsSection.tsx  # Best selling products
│   ├── BrandsSection.tsx    # Partners/brands section
│   └── SmartHomeSection.tsx # Smart home CTA section
├── types/
│   └── index.ts             # TypeScript interfaces
public/
├── smart-image/             # Images from original project
└── fonts/                   # Custom fonts
```

## Key Changes from Angular

1. **Routing**: Angular Router → Next.js App Router
2. **Components**: Angular Components → React Components (TSX)
3. **Styling**: Angular CSS → CSS-in-JS with styled-jsx
4. **State Management**: Angular Services → React hooks (useState, useEffect)
5. **Templates**: Angular templates → JSX
6. **Directives**: *ngFor, *ngIf → map(), conditional rendering

## Features Converted

- ✅ Navigation bar with responsive design
- ✅ Footer with social links
- ✅ Home hero section with swiper functionality
- ✅ Categories section
- ✅ Articles/content sections
- ✅ Best selling products
- ✅ Brands/partners section
- ✅ Smart home CTA section
- ✅ Bootstrap CSS styling
- ✅ Custom fonts (Raleway, Josefin Sans)
- ✅ Responsive design
- ✅ FontAwesome icons

## Next Steps

1. Add actual images to `public/smart-image/`
2. Add font files to `public/fonts/`
3. Implement API calls to replace mock data
4. Add remaining pages (products, smart-home, etc.)
5. Implement authentication
6. Add shopping cart functionality
7. Add internationalization (i18n) if needed

## Running the Project

```bash
npm install
npm run dev
```

The application will be available at `http://localhost:3000`