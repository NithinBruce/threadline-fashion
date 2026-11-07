import { Heart, ArrowUpRight } from 'lucide-react';

export default function ProductCard({ product, saved, onToggle, onOpen }) {
  return (
    <article className="product-card">
      <button className="product-image" onClick={() => onOpen(product)} aria-label={`View ${product.name}`}>
        <img src={product.image} alt={product.name} loading="lazy" />
        {product.tag && <span className="product-tag">{product.tag}</span>}
        <span className="quick-view">Quick view <ArrowUpRight size={14}/></span>
      </button>
      <div className="product-meta">
        <div><h3>{product.name}</h3><p>{product.color} · {product.type}</p></div>
        <button className={saved ? 'save-button saved' : 'save-button'} onClick={() => onToggle(product.id)} aria-label="Toggle wishlist">
          <Heart size={18} fill={saved ? 'currentColor' : 'none'}/>
        </button>
      </div>
      <p className="price">₹{product.price.toLocaleString('en-IN')}</p>
    </article>
  );
}
