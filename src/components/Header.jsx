import { useState } from 'react';
import { Menu, X, Search, Heart, ArrowUpRight } from 'lucide-react';

export default function Header({ onSearch, wishlistCount, onWishlist }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <button className="icon-button mobile-menu" onClick={() => setOpen(!open)} aria-label="Toggle menu">
        {open ? <X size={21}/> : <Menu size={21}/>}
      </button>
      <a className="wordmark" href="#home">THREADLINE<span>®</span></a>
      <nav className={open ? 'nav nav-open' : 'nav'}>
        <a href="#collection" onClick={() => setOpen(false)}>New arrivals</a>
        <a href="#collection" onClick={() => setOpen(false)}>Men</a>
        <a href="#collection" onClick={() => setOpen(false)}>Women</a>
        <a href="#reviews" onClick={() => setOpen(false)}>Reviews</a>
        <a href="#enquire" onClick={() => setOpen(false)}>Enquire</a>
        <a href="#story" onClick={() => setOpen(false)}>Our story</a>
      </nav>
      <div className="header-actions">
        <button className="icon-button" onClick={onSearch} aria-label="Search products"><Search size={19}/></button>
        <button className="icon-button wishlist-link" onClick={onWishlist} aria-label="Show wishlist">
          <Heart size={19}/><span>{wishlistCount}</span>
        </button>
        <a className="header-cta" href="#enquire">Enquire <ArrowUpRight size={15}/></a>
      </div>
    </header>
  );
}
