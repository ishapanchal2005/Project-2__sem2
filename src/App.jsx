import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [search, setSearch] = useState("");
  const [slide, setSlide] = useState(0);

  const banners = [
    "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=1600",
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1600",
    "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1600",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % banners.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [banners.length]);

  const products = [
    {
      id: 1,
      title: "Wireless Headphones",
      price: 1999,
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    },
    {
      id: 2,
      title: "Smart Watch",
      price: 2499,
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    },
    {
      id: 3,
      title: "Laptop",
      price: 54999,
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
    },
    {
      id: 4,
      title: "Bluetooth Speaker",
      price: 1499,
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=500",
    },
    {
      id: 5,
      title: "Gaming Mouse",
      price: 899,
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500",
    },
    {
      id: 6,
      title: "Keyboard",
      price: 1299,
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500",
    },
    {
      id: 7,
      title: "Tablet",
      price: 14999,
      rating: 4,
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500",
    },
    {
      id: 8,
      title: "DSLR Camera",
      price: 39999,
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500",
    },
  ];

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase()),
  );

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  const removeFromCart = () => {
    if (cartCount > 0) {
      setCartCount(cartCount - 1);
    }
  };

  return (
    <div>
      {/* NAVBAR */}

      <nav className="navbar">
        <div className="logo">amazon</div>

        <div className="location">
          📍
          <div>
            <small>Deliver To</small>
            <p>Ghaziabad</p>
          </div>
        </div>

        <div className="search-box">
          <select className="search-category">
            <option>All</option>
            <option>Electronics</option>
            <option>Mobiles</option>
            <option>Laptops</option>
          </select>
          <input
            type="text"
            placeholder="Search Amazon Products"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button>🔍</button>
        </div>

        <div className="nav-links">
          <div className="nav-item">
            <small>Hello, Sign in</small>
            <p>Account & Lists</p>
          </div>

          <div className="nav-item">
            <small>Returns</small>
            <p>& Orders</p>
          </div>

          <div className="cart">
            🛒 Cart <span>{cartCount}</span>
          </div>
        </div>
      </nav>

      {/* HERO SLIDER */}

      <div className="hero-slider">
        <img src={banners[slide]} alt="Amazon Banner" />
      </div>

      {/* WELCOME SECTION */}

      <div className="banner">
        <h1>Welcome to Amazon Clone</h1>
        <p>Best Electronics Deals Available Today</p>
      </div>

      {/* MAIN CONTENT */}

      <div className="main-section">
        {/* SIDEBAR */}

        <div className="sidebar">
          <h3>Categories</h3>

          <ul>
            <li>Electronics</li>
            <li>Mobiles</li>
            <li>Laptops</li>
            <li>Accessories</li>
            <li>Gaming</li>
            <li>Books</li>
            <li>Fashion</li>
          </ul>
        </div>

        {/* PRODUCTS */}

        <div className="products">
          {filteredProducts.map((product) => (
            <div className="card" key={product.id}>
              <img src={product.image} alt={product.title} />

              <h3>{product.title}</h3>

              <div className="rating">{"⭐".repeat(product.rating)}</div>

              <p className="price">₹{product.price}</p>

              <button onClick={addToCart}>Add To Cart</button>

              <button className="remove-btn" onClick={removeFromCart}>
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}

      <footer>
        <h3>Amazon </h3>

        <div className="footer-links">
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Help Center</a>
        </div>

        <p>© 2026 Amazon . All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
