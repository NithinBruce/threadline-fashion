const photo = (id, width = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

export const products = [
  { id: 1, name: 'Relaxed Linen Shirt', category: 'Men', type: 'Shirts', color: 'Natural', tag: 'BESTSELLER', price: 999, image: photo('photo-1598033129183-c4f50c736f10'), description: 'An easy, breathable layer cut from a softly textured linen blend.' },
  { id: 2, name: 'Everyday Tailored Trouser', category: 'Men', type: 'Trousers', color: 'Stone', tag: 'NEW', price: 1299, image: photo('photo-1515886657613-9f3515b0c78f'), description: 'A clean, relaxed silhouette made for everyday movement.' },
  { id: 3, name: 'Essential Cotton Tee', category: 'Men', type: 'T-shirts', color: 'Off white', tag: '', price: 500, image: photo('photo-1521572163474-6864f9cf17ab'), description: 'The dependable everyday tee, with a considered fit and soft handfeel.' },
  { id: 4, name: 'Utility Overshirt', category: 'Men', type: 'Shirts', color: 'Olive', tag: 'NEW', price: 1499, image: photo('photo-1591047139829-d91aecb6caea'), description: 'A versatile mid-layer with a practical, modern shape.' },
  { id: 5, name: 'Sculpted Midi Dress', category: 'Women', type: 'Dresses', color: 'Black', tag: 'BESTSELLER', price: 1799, image: photo('photo-1539008835657-9e8e9680c956'), description: 'A fluid midi dress with a confident, understated silhouette.' },
  { id: 6, name: 'Soft Structure Top', category: 'Women', type: 'Tops', color: 'Cream', tag: 'NEW', price: 799, image: photo('photo-1551163943-3f6a855d1153'), description: 'An elevated staple designed to pair effortlessly with everything.' },
  { id: 7, name: 'Wide-Leg Denim', category: 'Women', type: 'Jeans', color: 'Indigo', tag: '', price: 1399, image: photo('photo-1541099649105-f69ad21f3246'), description: 'A relaxed wide-leg fit with a timeless, lived-in finish.' },
  { id: 8, name: 'Everyday Knit', category: 'Women', type: 'Tops', color: 'Oat', tag: '', price: 999, image: photo('photo-1576566588028-4147f3842f27'), description: 'A soft knit layer for a little extra warmth and texture.' },
  { id: 9, name: 'Weekend Co-ord', category: 'Women', type: 'Sets', color: 'Sand', tag: 'NEW', price: 1899, image: photo('photo-1483985988355-763728e1935b'), description: 'A matching set that makes getting dressed feel effortless.' },
  { id: 10, name: 'Classic Denim Jacket', category: 'Men', type: 'Jackets', color: 'Blue', tag: '', price: 1699, image: photo('photo-1529139574466-a303027c1d8b'), description: 'A wardrobe classic reworked with a clean, contemporary fit.' },
  { id: 11, name: 'Minimal Day Bag', category: 'Women', type: 'Accessories', color: 'Tan', tag: '', price: 2000, image: photo('photo-1548036328-c9fa89d128fa'), description: 'A simple everyday companion with room for the essentials.' },
  { id: 12, name: 'Relaxed Polo', category: 'Men', type: 'T-shirts', color: 'Moss', tag: 'NEW', price: 749, image: photo('photo-1627225924765-552d49cf47ad'), description: 'A smart-casual staple with a relaxed, easy-going fit.' }
];
