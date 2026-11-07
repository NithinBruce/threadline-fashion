import { X, Heart } from 'lucide-react';

export default function ProductModal({ product, onClose, saved, onToggle }) {
  if (!product) return null;
  return (
    <div className="modal-backdrop" onMouseDown={onClose}>
      <section className="product-modal" onMouseDown={e => e.stopPropagation()}>
        <button className="modal-close icon-button" onClick={onClose} aria-label="Close"><X/></button>
        <img src={product.image} alt={product.name}/>
        <div className="modal-info">
          <span className="eyebrow">{product.category} / {product.type}</span>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p className="modal-note">Available sizes: XS · S · M · L · XL</p>
          <button className="dark-button" onClick={() => onToggle(product.id)}>
            <Heart size={17} fill={saved ? 'currentColor' : 'none'}/>{saved ? 'Saved to wishlist' : 'Add to wishlist'}
          </button>
          <a className="dark-button" href="#enquire" onClick={onClose}>Enquire about this piece</a>
          <small>This is a catalogue preview. Get in touch to ask about availability.</small>
        </div>
      </section>
    </div>
  );
}
