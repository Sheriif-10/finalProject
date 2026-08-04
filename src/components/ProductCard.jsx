import { Link } from "react-router-dom";

function ProductCard({ product, addToCart }) {
  return (
    <div className="card product-card h-100">
      <div className="product-image-wrapper">
        <img
          src={product.image}
          className="card-img-top product-image"
          alt={product.title}
        />
      </div>

      <div className="card-body d-flex flex-column">
        <span className="badge bg-light text-dark border px-3 py-2 align-self-start mb-3">
          {product.category}
        </span>

        <h5
          className="card-title fw-bold product-title"
          style={{
            minHeight: "58px",
            lineHeight: "1.45",
          }}
        >
          {product.title.length > 45
            ? `${product.title.substring(0, 45)}...`
            : product.title}
        </h5>

        <div className="mt-auto">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <span className="price">${product.price.toFixed(2)}</span>

            <Link
              to={`/product/${product.id}`}
              className="text-decoration-none fw-semibold text-primary"
            >
              View Details
              <i className="bi bi-arrow-right ms-1"></i>
            </Link>
          </div>

          <button
            className="btn btn-dark w-100 py-2 fw-semibold"
            onClick={() => addToCart(product)}
          >
            <i className="bi bi-cart-plus me-2"></i>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
