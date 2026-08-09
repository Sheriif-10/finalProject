import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Footer from "../components/Footer";
import {
  validateName,
  validateEmail,
  validatePhone,
  validateAddress,
} from "../utils/Auth";

function Checkout({ cart, setCart }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

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

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const validateForm = () => {
    const newErrors = {};

    const nameError = validateName(form.name);
    const emailError = validateEmail(form.email);
    const addressError = validateAddress(form.address);
    const phoneError = validatePhone(form.phone);

    if (nameError) {
      newErrors.name = nameError;
    }

    if (emailError) {
      newErrors.email = emailError;
    }

    if (addressError) {
      newErrors.address = addressError;
    }

    if (phoneError) {
      newErrors.phone = phoneError;
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please correct the information and try again.");
      return;
    }

    toast.success("Order placed successfully 🎉");

    setCart([]);

    navigate("/");
  };

  return (
    <>
      <div className="container py-5">
        <Link to="/cart" className="text-decoration-none text-dark fw-semibold">
          ← Back to Cart
        </Link>

        <div className="mt-4 mb-4">
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
                      className={`form-control ${
                        errors.name ? "is-invalid" : ""
                      }`}
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                    />

                    {errors.name && (
                      <div className="invalid-feedback">{errors.name}</div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">Email</label>

                    <input
                      type="email"
                      name="email"
                      className={`form-control ${
                        errors.email ? "is-invalid" : ""
                      }`}
                      placeholder="example@email.com"
                      value={form.email}
                      onChange={handleChange}
                    />

                    {errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">Address</label>

                    <input
                      type="text"
                      name="address"
                      className={`form-control ${
                        errors.address ? "is-invalid" : ""
                      }`}
                      placeholder="Your address"
                      value={form.address}
                      onChange={handleChange}
                    />

                    {errors.address && (
                      <div className="invalid-feedback">{errors.address}</div>
                    )}
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-semibold">Phone</label>

                    <input
                      type="text"
                      name="phone"
                      className={`form-control ${
                        errors.phone ? "is-invalid" : ""
                      }`}
                      placeholder="01xxxxxxxxx"
                      value={form.phone}
                      onChange={handleChange}
                    />

                    {errors.phone && (
                      <div className="invalid-feedback">{errors.phone}</div>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="btn btn-warning w-100 py-3 fw-bold"
                  >
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
