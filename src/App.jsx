import { useMemo, useState } from 'react';
import { ArrowDown, ArrowRight, Search, X, Instagram, ArrowUpRight } from 'lucide-react';
import Header from './components/Header.jsx';
import ProductCard from './components/ProductCard.jsx';
import ProductModal from './components/ProductModal.jsx';
import Scene from './components/Scene.jsx';
import { products } from './data/products.js';

const categories = ['All', 'Men', 'Women'];

export default function App() {
  const [category, setCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [wishlistOnly, setWishlistOnly] = useState(false);
  const [activeProduct, setActiveProduct] = useState(null);

  const visibleProducts = useMemo(() => {
    let list = products.filter(p => category === 'All' || p.category === category);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(p => `${p.name} ${p.category} ${p.type} ${p.color}`.toLowerCase().includes(q));
    }
    if (wishlistOnly) list = list.filter(p => wishlist.includes(p.id));
    return list;
  }, [category, search, wishlistOnly, wishlist]);

  const toggleWishlist = id => setWishlist(current =>
    current.includes(id) ? current.filter(item => item !== id) : [...current, id]
  );

  const focusSearch = () => {
    setSearchOpen(true);
    setWishlistOnly(false);
    setTimeout(() => document.getElementById('catalog-search')?.focus(), 0);
    document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' });
  };

  const submitEnquiry = event => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Threadline enquiry: ${formData.get('collection')}`);
    const body = encodeURIComponent(
      `Name: ${formData.get('name')}\nEmail: ${formData.get('email')}\nCollection: ${formData.get('collection')}\n\n${formData.get('message')}`
    );
    window.location.href = `mailto:hello@threadline.example?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <div className="announcement">THREADLINE <span>—</span> MODERN ESSENTIALS, MADE FOR EVERY DAY</div>
      <Header onSearch={focusSearch} wishlistCount={wishlist.length} onWishlist={() => {
        setWishlistOnly(v => !v);
        document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' });
      }}/>
      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line"/> THE EVERYDAY EDIT — 2026</p>
            <h1>Wear what<br/><em>moves you.</em></h1>
            <p className="hero-description">Thoughtful pieces. Effortless combinations. A wardrobe that feels like you.</p>
            <div className="hero-actions">
              <a href="#collection" className="dark-button">Explore collection <ArrowRight size={17}/></a>
              <a href="#story" className="text-link">Discover our story <ArrowUpRight size={15}/></a>
            </div>
            <div className="hero-foot"><span>01 / 03</span><span>DESIGNED FOR REAL LIFE</span></div>
          </div>
          <div className="hero-visual">
            <Scene/>
            <div className="hero-caption"><span>DRAG TO ROTATE</span><span>360° VIEW — THREADLINE</span></div>
          </div>
          <a className="scroll-cue" href="#collection"><ArrowDown size={15}/> SCROLL TO EXPLORE</a>
        </section>

        <section className="intro-strip">
          <span>LESS, BUT BETTER.</span>
          <p>Modern essentials, made to be worn on repeat.</p>
          <span>EST. 2026 · INDIA</span>
        </section>

        <section className="collection section-wrap" id="collection">
          <div className="section-heading">
            <div><p className="eyebrow">THE COLLECTION / 001</p><h2>Find your <em>everyday.</em></h2></div>
            <p className="section-description">A little less ordinary. Explore easy-to-wear pieces for wherever the day takes you.</p>
          </div>
          <div className="catalog-toolbar">
            <div className="category-tabs">
              {categories.map(item => <button key={item} className={category === item ? 'tab active' : 'tab'} onClick={() => {setCategory(item); setWishlistOnly(false);}}>{item}</button>)}
              <span className="result-count">{visibleProducts.length} pieces</span>
            </div>
            <div className="catalog-tools">
              {searchOpen && <div className="search-field"><Search size={16}/><input id="catalog-search" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search pieces..."/><button onClick={() => {setSearch('');setSearchOpen(false);}} aria-label="Close search"><X size={15}/></button></div>}
              {!searchOpen && <button className="tool-button" onClick={() => setSearchOpen(true)}><Search size={16}/> Search</button>}
            </div>
          </div>
          {wishlistOnly && <div className="filter-notice">Showing your wishlist <button onClick={() => setWishlistOnly(false)}>Clear filter <X size={13}/></button></div>}
          <div className="product-grid">
            {visibleProducts.map(product => <ProductCard key={product.id} product={product} saved={wishlist.includes(product.id)} onToggle={toggleWishlist} onOpen={setActiveProduct}/>)}
          </div>
          {visibleProducts.length === 0 && <div className="empty-state"><h3>No pieces found.</h3><p>Try another search or clear your filters.</p><button className="text-link" onClick={() => {setSearch('');setWishlistOnly(false);setCategory('All');}}>Clear all filters <ArrowRight size={15}/></button></div>}
        </section>

        <section className="campaign">
          <div className="campaign-image"><img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=85" alt="Fashion campaign portrait"/></div>
          <div className="campaign-copy"><p className="eyebrow">A NEW POINT OF VIEW</p><h2>Make room for<br/><em>the essentials.</em></h2><p>Build a wardrobe around pieces that work together, work harder, and feel right every time.</p><a href="#collection" className="dark-button">Shop the edit <ArrowRight size={17}/></a><span className="campaign-index">CAMPAIGN 01 — 2026</span></div>
        </section>

        <section className="reviews section-wrap" id="reviews">
          <div className="section-heading">
            <div><p className="eyebrow">KIND WORDS</p><h2>Worn and <em>loved.</em></h2></div>
            <p className="section-description">A few notes from people who have made Threadline part of their everyday.</p>
          </div>
          <div className="review-grid">
            <article className="review-card">
              <span className="review-stars" aria-label="5 out of 5 stars">★★★★★</span>
              <blockquote>“The shirt feels so good and goes with almost everything. It has quickly become my most-worn piece.”</blockquote>
              <p>ANANYA R. <span>· WOMEN'S COLLECTION</span></p>
            </article>
            <article className="review-card">
              <span className="review-stars" aria-label="5 out of 5 stars">★★★★★</span>
              <blockquote>“Thoughtful details, lovely fabric, and an easy fit. Exactly what I want from everyday clothes.”</blockquote>
              <p>ROHAN M. <span>· MEN'S COLLECTION</span></p>
            </article>
            <article className="review-card">
              <span className="review-stars" aria-label="5 out of 5 stars">★★★★★</span>
              <blockquote>“I love how simple it is to style these pieces. Getting dressed feels effortless.”</blockquote>
              <p>ISHA K. <span>· EVERYDAY EDIT</span></p>
            </article>
          </div>
        </section>

        <section className="enquiry-section" id="enquire">
          <div className="enquiry-copy">
            <p className="eyebrow">LET'S TALK</p>
            <h2>Have a question?<br/><em>We're here.</em></h2>
            <p>Ask us about a piece, sizing, styling, or anything else. We'll be happy to help.</p>
            <a className="enquiry-email" href="mailto:hello@threadline.example">hello@threadline.example <ArrowUpRight size={15}/></a>
          </div>
          <form className="enquiry-form" onSubmit={submitEnquiry}>
            <label>Your name<input name="name" autoComplete="name" required /></label>
            <label>Email address<input name="email" type="email" autoComplete="email" required /></label>
            <label>What are you interested in?
              <select name="collection" defaultValue="General enquiry">
                <option>General enquiry</option>
                <option>Men's collection</option>
                <option>Women's collection</option>
                <option>Order or availability</option>
              </select>
            </label>
            <label>Your message<textarea name="message" rows="4" required /></label>
            <button type="submit" className="dark-button">Send an enquiry <ArrowRight size={17}/></button>
            <small>Submitting opens your email app with your message ready to send.</small>
          </form>
        </section>

        <section className="values section-wrap" id="story">
          <div><p className="eyebrow">THE THREADLINE APPROACH</p><h2>Good clothes.<br/><em>Good choices.</em></h2></div>
          <div className="value-list">
            <article><span>01</span><div><h3>Considered design</h3><p>Clean silhouettes and thoughtful details that feel current without chasing every trend.</p></div></article>
            <article><span>02</span><div><h3>Wear on repeat</h3><p>Versatile pieces designed to work together and earn their place in your wardrobe.</p></div></article>
            <article><span>03</span><div><h3>Made for real life</h3><p>Comfortable, uncomplicated style for the everyday moments that make up your life.</p></div></article>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer-top"><a className="wordmark footer-logo" href="#home">THREADLINE<span>®</span></a><p>Modern essentials. Everyday expression.</p><a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-link"><Instagram size={17}/> Instagram <ArrowUpRight size={14}/></a></div>
        <div className="footer-bottom"><span>© 2026 THREADLINE. DEMO BRAND.</span><span>MADE FOR EVERYDAY, EVERYWHERE.</span><a href="mailto:hello@threadline.example">GET IN TOUCH</a></div>
      </footer>
      <ProductModal product={activeProduct} onClose={() => setActiveProduct(null)} saved={activeProduct ? wishlist.includes(activeProduct.id) : false} onToggle={toggleWishlist}/>
    </>
  );
}
