import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

function Home({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [maxPrice, setMaxPrice] = useState(1000);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const categories = useMemo(() => {
    return ["all", ...new Set(products.map((product) => product.category))];
  }, [products]);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory = category === "all" || product.category === category;

    const matchesPrice = product.price <= maxPrice;

    return matchesSearch && matchesCategory && matchesPrice;
  });

  const resetFilters = () => {
    setSearch("");
    setCategory("all");
    setMaxPrice(1000);
  };

  return (
    <>
      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3">Loading products...</p>
        </div>
      ) : (
        <>
          <section className="hero-section">
            <div className="container">
              <div className="row align-items-center min-vh-50">
                <div className="col-lg-6">
                  <span className="hero-badge mb-4 d-inline-flex align-items-center">
                    <i className="bi bi-lightning-charge-fill me-2"></i>
                    Welcome to ShopEase
                  </span>

                  <h1 className="hero-title">
                    Shop Smarter.
                    <br />
                    Live Better.
                  </h1>

                  <p className="hero-text">
                    Discover premium products with trusted quality, fast
                    shipping and secure checkout — all in one place.
                  </p>

                  <a
                    href="#products"
                    className="btn btn-warning btn-lg px-4 py-3 mt-2"
                  >
                    <i className="bi bi-bag me-2"></i>
                    Shop Now
                  </a>

                  <div className="hero-features mt-5">
                    <div className="feature-box">
                      <i className="bi bi-truck text-warning fs-3"></i>
                      <h6 className="mt-2 mb-1 fw-bold">Free Shipping</h6>
                      <small>Orders over $50</small>
                    </div>

                    <div className="feature-box">
                      <i className="bi bi-shield-check text-warning fs-3"></i>
                      <h6 className="mt-2 mb-1 fw-bold">Secure Payment</h6>
                      <small>100% Protected</small>
                    </div>

                    <div className="feature-box">
                      <i className="bi bi-star-fill text-warning fs-3"></i>
                      <h6 className="mt-2 mb-1 fw-bold">Top Quality</h6>
                      <small>Trusted Products</small>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 text-center d-none d-lg-block">
                  <div className="hero-icon">
                    <div
                      className="d-inline-flex justify-content-center align-items-center rounded-circle"
                      style={{
                        width: "320px",
                        height: "320px",
                        background: "rgba(255,255,255,.08)",
                        backdropFilter: "blur(12px)",
                        border: "1px solid rgba(255,255,255,.1)",
                        boxShadow: "0 20px 40px rgba(0,0,0,.2)",
                      }}
                    >
                      <i
                        className="bi bi-bag-check-fill text-warning"
                        style={{ fontSize: "9rem" }}
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-5 bg-white">
            <div className="container">
              <div className="text-center mb-5">
                <span className="text-warning fw-bold">WHY CHOOSE US</span>

                <h2 className="fw-bold mt-2">A Better Shopping Experience</h2>

                <p className="text-muted">
                  Everything you need for a fast, secure and enjoyable shopping
                  journey.
                </p>
              </div>

              <div className="row g-4">
                <div className="col-md-4">
                  <div className="card border-0 shadow-sm h-100 text-center p-4 feature-card">
                    <div className="feature-icon mx-auto mb-4">
                      <i className="bi bi-truck"></i>
                    </div>

                    <h5 className="fw-bold">Free Shipping</h5>

                    <p className="text-muted mb-0">
                      Fast and reliable delivery on every order.
                    </p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card border-0 shadow-sm h-100 text-center p-4 feature-card">
                    <div className="feature-icon mx-auto mb-4">
                      <i className="bi bi-shield-check"></i>
                    </div>

                    <h5 className="fw-bold">Secure Payment</h5>

                    <p className="text-muted mb-0">
                      Your payments are always safe and protected.
                    </p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card border-0 shadow-sm h-100 text-center p-4 feature-card">
                    <div className="feature-icon mx-auto mb-4">
                      <i className="bi bi-award"></i>
                    </div>

                    <h5 className="fw-bold">Premium Quality</h5>

                    <p className="text-muted mb-0">
                      Carefully selected products with trusted quality.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-5">
            <div className="container">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                  <span className="text-warning fw-bold">CATEGORIES</span>

                  <h2 className="fw-bold mt-2">Shop by Category</h2>
                </div>
              </div>

              <div className="row g-4">
                <div className="col-md-4">
                  <div className="category-card">
                    <i className="bi bi-laptop"></i>

                    <h4>Electronics</h4>

                    <p>Phones, laptops, accessories and more.</p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="category-card">
                    <i className="bi bi-gem"></i>

                    <h4>Jewelry</h4>

                    <p>Premium collections with elegant designs.</p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="category-card">
                    <i className="bi bi-bag"></i>

                    <h4>Fashion</h4>

                    <p>Clothing and everyday essentials.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="products" className="container py-5">
            <div className="row g-4">
              <div className="col-lg-3">
                <div className="card filter-card border-0">
                  <div className="card-body">
                    <h5 className="fw-bold mb-4 d-flex align-items-center">
                      <i className="bi bi-sliders2 text-warning me-2"></i>
                      Find Products
                    </h5>

                    <label className="form-label">Search by title</label>

                    <div className="input-group mb-4">
                      <span className="input-group-text bg-white border-end-0">
                        <i className="bi bi-search text-muted"></i>
                      </span>

                      <input
                        type="text"
                        className="form-control border-start-0"
                        placeholder="Search products..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                      />
                    </div>

                    <label className="form-label">Category</label>

                    <select
                      className="form-select mb-4"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      {categories.map((item) => (
                        <option key={item} value={item}>
                          {item === "all" ? "All Categories" : item}
                        </option>
                      ))}
                    </select>

                    <label className="form-label">
                      Maximum Price: ${maxPrice}
                    </label>

                    <input
                      type="range"
                      className="form-range"
                      min="0"
                      max="1000"
                      step="10"
                      value={maxPrice}
                      onChange={(e) => setMaxPrice(Number(e.target.value))}
                    />

                    <button
                      className="btn btn-dark w-100 mt-3"
                      onClick={resetFilters}
                    >
                      <i className="bi bi-arrow-counterclockwise me-2"></i>
                      Reset Filters
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-lg-9">
                <div className="products-header mb-5">
                  <span className="text-warning fw-bold">OUR COLLECTION</span>

                  <div className="d-flex justify-content-between align-items-center flex-wrap mt-2">
                    <div>
                      <h2 className="fw-bold display-6 mb-2">
                        Explore Our Products
                      </h2>

                      <p className="text-muted mb-0">
                        Showing <strong>{filteredProducts.length}</strong>{" "}
                        premium products selected for you.
                      </p>
                    </div>

                    <div className="mt-3 mt-lg-0">
                      <button className="btn btn-outline-dark" disabled>
                        <i className="bi bi-grid-3x3-gap me-2"></i>
                        Collection
                      </button>
                    </div>
                  </div>
                </div>

                {filteredProducts.length === 0 ? (
                  <div className="alert alert-warning">
                    No products match your search or filters.
                  </div>
                ) : (
                  <div className="row g-4">
                    {filteredProducts.map((product) => (
                      <div className="col-sm-6 col-xl-4" key={product.id}>
                        <ProductCard product={product} addToCart={addToCart} />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>

          <section className="newsletter-section py-5 mt-5">
            <div className="container">
              <div className="newsletter-box text-center">
                <span className="text-warning fw-bold">STAY UPDATED</span>

                <h2 className="fw-bold mt-3">
                  Get the latest offers & updates
                </h2>

                <p className="text-light opacity-75 mb-4">
                  Subscribe to receive exclusive deals and new arrivals directly
                  in your inbox.
                </p>

                <div className="row justify-content-center">
                  <div className="col-lg-6">
                    <div className="input-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                      />

                      <button className="btn btn-warning px-4">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <Footer />
        </>
      )}
    </>
  );
}

export default Home;
