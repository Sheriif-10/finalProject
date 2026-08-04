import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import productsData from "../data/products.json";
import Footer from "../components/Footer";

function ProductPage({ addToCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const selectedProduct = productsData.find((item) => item.id === Number(id));

    setProduct(selectedProduct);
  }, [id]);

  if (!product) {
    return (
      <div className="container py-5">
        <div className="alert alert-danger">Product not found.</div>

        <Link to="/" className="btn btn-dark">
          Back
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="container py-5">
        <Link to="/" className="btn btn-outline-secondary mb-5">
          <i className="bi bi-arrow-left me-2"></i>
          Back to Shopping
        </Link>

        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <div className="product-preview">
              <img
                src={product.image}
                alt={product.title}
                className="product-detail-image"
              />
            </div>
          </div>

          <div className="col-lg-6">
            <span className="badge bg-warning text-dark px-3 py-2 mb-3">
              {product.category}
            </span>

            <h1 className="fw-bold mb-3">{product.title}</h1>

            <div className="d-flex align-items-center mb-4">
              <span className="rating-stars me-2">
                {"★".repeat(Math.round(product.rating.rate))}
                {"☆".repeat(5 - Math.round(product.rating.rate))}
              </span>

              <span className="text-muted">
                ({product.rating.count} Reviews)
              </span>
            </div>

            <h2 className="display-5 fw-bold text-primary mb-4">
              ${product.price.toFixed(2)}
            </h2>

            <p className="text-muted lh-lg">{product.description}</p>

            <div className="border rounded-4 p-3 my-4">
              <div className="d-flex justify-content-between mb-2">
                <span>Availability</span>
                <span className="text-success fw-bold">In Stock</span>
              </div>

              <div className="d-flex justify-content-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
            </div>

            <button
              className="btn btn-warning btn-lg px-5"
              onClick={() => addToCart(product)}
            >
              <i className="bi bi-cart-plus me-2"></i>
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default ProductPage;
