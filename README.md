# THREADLINE — Fashion catalogue starter

A responsive men’s and women’s fashion catalogue built with React, Vite, Three.js, React Three Fiber and Drei.

## 1. Requirements
- Node.js 18.18+ (Node 20 LTS recommended)
- npm

Check your installation:
```bash
node -v
npm -v
```

## 2. Install and run
Extract this folder, open a terminal inside `threadline-fashion`, then run:
```bash
npm install
npm run dev
```
Open the local URL printed by Vite (usually http://localhost:5173).

## 3. Production build
```bash
npm run build
npm run preview
```
The production website is generated in `dist/`.

## 4. Customize the brand
- Change `THREADLINE` in `src/components/Header.jsx`, `src/App.jsx`, and `index.html`.
- Replace product entries and image URLs in `src/data/products.js`.
- Update contact and social links in `src/App.jsx`.
- Change colours and typography in `src/styles.css`.

Product images currently use Unsplash image URLs and need an internet connection. Replace them with licensed images you own or have permission to use before launch.

## 5. Features included
- Responsive mobile, tablet and desktop layout
- Men / Women / All catalogue filters
- Product search and price sorting
- Wishlist filter and saved-product state (session only)
- Product quick-view modal
- Three.js hero sculpture using React Three Fiber
- Reduced-motion support and lazy-loaded product images

## 6. Important scope note
This is a frontend catalogue, not a checkout store. It does not process payments, save orders, or persist wishlist data after refresh. A future Django REST Framework backend can provide product management, inventory, customer enquiries and an admin dashboard.
