import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Footer from "../components/Footer";

function Checkout({ cart, setCart }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const shipping = 0;

  const total = subtotal + shipping;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.address || !form.phone) {
      toast.error("Please fill in all information.");
      return;
    }

    toast.success("Order placed successfully 🎉");

    setCart([]);

    navigate("/");
  };

  return (
    <>
      <div className="container py-5">
        <div className="mb-5">
          <Link to="/cart" className="btn btn-outline-dark mb-4">
            <i className="bi bi-arrow-left me-2"></i>
            Back to Cart
          </Link>

          <span className="text-warning fw-bold d-block">
            SHOPEASE CHECKOUT
          </span>

          <h1 className="fw-bold mt-2">Checkout</h1>

          <p className="text-muted">
            Complete your information to place your order.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-lg-7">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <h3 className="fw-bold mb-4">Customer Information</h3>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Full Name</label>

                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">Email</label>

                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="example@email.com"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">Address</label>

                    <input
                      type="text"
                      name="address"
                      className="form-control"
                      placeholder="Your address"
                      value={form.address}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-semibold">Phone</label>

                    <input
                      type="text"
                      name="phone"
                      className="form-control"
                      placeholder="Your phone number"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <button className="btn btn-warning w-100 py-3 fw-bold">
                    <i className="bi bi-check-circle me-2"></i>
                    Confirm Order
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="card border-0 shadow summary-card">
              <div className="card-body p-4">
                <h3 className="fw-bold mb-4">Order Summary</h3>

                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="d-flex justify-content-between mb-3"
                  >
                    <span>
                      {item.title.length > 25
                        ? item.title.substring(0, 25) + "..."
                        : item.title}{" "}
                      x{item.quantity}
                    </span>

                    <strong>${(item.price * item.quantity).toFixed(2)}</strong>
                  </div>
                ))}

                <hr />

                <div className="d-flex justify-content-between mb-3">
                  <span>Subtotal</span>
                  <strong>${subtotal.toFixed(2)}</strong>
                </div>

                <div className="d-flex justify-content-between mb-3">
                  <span>Shipping</span>
                  <strong className="text-success">
                    ${shipping.toFixed(2)}
                  </strong>
                </div>

                <hr />

                <div className="d-flex justify-content-between fs-5 fw-bold">
                  <span>Total</span>

                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Checkout;
