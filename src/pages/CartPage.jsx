import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function CartPage({ cart, updateQuantity, removeFromCart }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <>
        <div className="container empty-state">
          <div className="text-center">
            <i className="bi bi-cart-x display-1 text-warning"></i>

            <h2 className="fw-bold mt-3">Your Cart is Empty</h2>

            <p className="text-muted">
              Looks like you haven't added anything yet.
            </p>

            <Link to="/" className="btn btn-warning px-4">
              Start Shopping
            </Link>
          </div>
        </div>

        <Footer />
      </>
    );
  }

  return (
    <>
      <div className="container py-5">
        <div className="d-flex justify-content-between align-items-center mb-5">
          <div>
            <span className="text-warning fw-bold">SHOPPING CART</span>

            <h2 className="fw-bold">Review Your Order</h2>
          </div>

          <span className="badge bg-dark fs-6 px-3 py-2">
            {cart.length} Items
          </span>
        </div>

        <div className="row g-4">
          <div className="col-lg-8">
            {cart.map((item) => (
              <div
                className="card border-0 shadow-sm cart-card mb-3"
                key={item.id}
              >
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-md-2 text-center">
                      <img
                        src={item.image}
                        className="cart-image"
                        alt={item.title}
                      />
                    </div>

                    <div className="col-md-4">
                      <h6 className="fw-bold">{item.title}</h6>

                      <span className="text-primary fw-bold">
                        ${item.price}
                      </span>
                    </div>

                    <div className="col-md-3">
                      <div className="input-group">
                        <button
                          className="btn btn-outline-secondary"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                        >
                          -
                        </button>

                        <span className="form-control text-center">
                          {item.quantity}
                        </span>

                        <button
                          className="btn btn-outline-secondary"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="col-md-2 fw-bold text-end">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>

                    <div className="col-md-1 text-end">
                      <button
                        className="btn btn-outline-danger"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="col-lg-4">
            <div className="card border-0 shadow summary-card">
              <div className="card-body">
                <h4 className="fw-bold mb-4">Order Summary</h4>

                <div className="d-flex justify-content-between mb-3">
                  <span>Subtotal</span>
                  <strong>${total.toFixed(2)}</strong>
                </div>

                <div className="d-flex justify-content-between mb-3">
                  <span>Shipping</span>
                  <strong className="text-success">Free</strong>
                </div>

                <hr />

                <div className="d-flex justify-content-between fs-5 fw-bold mb-4">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>

                <Link
                  to="/checkout"
                  className="btn btn-warning w-100 py-3 fw-bold"
                >
                  Checkout
                </Link>

                <Link to="/" className="btn btn-outline-dark w-100 mt-3">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default CartPage;
