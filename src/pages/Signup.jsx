import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { validateName, validateEmail, validatePassword } from "../utils/Auth";

function Signup({ onLogin }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

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
    const passwordError = validatePassword(form.password);

    if (nameError) {
      newErrors.name = nameError;
    }

    if (emailError) {
      newErrors.email = emailError;
    }

    if (passwordError) {
      newErrors.password = passwordError;
    }

    if (!form.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password.";
    } else if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const existingUser = users.find(
      (user) => user.email.toLowerCase() === form.email.trim().toLowerCase(),
    );

    if (existingUser) {
      setErrors({
        email: "An account with this email already exists.",
      });
      return;
    }

    const newUser = {
      name: form.name.trim(),
      email: form.email.trim(),
      password: form.password,
    };

    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    onLogin({
      name: newUser.name,
      email: newUser.email,
    });

    navigate("/");
  };

  return (
    <div
      className="container d-flex align-items-center justify-content-center"
      style={{ minHeight: "85vh" }}
    >
      <div
        className="card auth-card border-0 shadow-lg"
        style={{ borderRadius: "22px" }}
      >
        <div className="card-body p-4 p-md-5">
          <div className="text-center">
            <div
              className="mx-auto d-flex justify-content-center align-items-center rounded-circle bg-warning"
              style={{
                width: "80px",
                height: "80px",
              }}
            >
              <i className="bi bi-person-plus-fill fs-1"></i>
            </div>

            <h2 className="fw-bold mt-4 mb-2">Create Account</h2>

            <p className="text-muted">
              Join ShopEase and start shopping today.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fw-semibold">Full Name</label>

              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-person"></i>
                </span>

                <input
                  name="name"
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={handleChange}
                />

                {errors.name && (
                  <div className="invalid-feedback">{errors.name}</div>
                )}
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Email Address</label>

              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-envelope"></i>
                </span>

                <input
                  name="email"
                  type="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleChange}
                />

                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Password</label>

              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-lock"></i>
                </span>

                <input
                  name="password"
                  type="password"
                  className={`form-control ${
                    errors.password ? "is-invalid" : ""
                  }`}
                  placeholder="Create a password"
                  value={form.password}
                  onChange={handleChange}
                />

                {errors.password && (
                  <div className="invalid-feedback">{errors.password}</div>
                )}
              </div>
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold">Confirm Password</label>

              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-shield-lock"></i>
                </span>

                <input
                  name="confirmPassword"
                  type="password"
                  className={`form-control ${
                    errors.confirmPassword ? "is-invalid" : ""
                  }`}
                  placeholder="Confirm your password"
                  value={form.confirmPassword}
                  onChange={handleChange}
                />

                {errors.confirmPassword && (
                  <div className="invalid-feedback">
                    {errors.confirmPassword}
                  </div>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-dark btn-lg w-100 fw-semibold"
            >
              <i className="bi bi-person-check-fill me-2"></i>
              Create Account
            </button>
          </form>

          <div className="text-center mt-4">
            <small className="text-muted">Already have an account?</small>

            <br />

            <Link to="/login" className="fw-semibold text-decoration-none">
              Login →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
