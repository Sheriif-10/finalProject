import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { validateEmail } from "../utils/Auth";

function Login({ onLogin }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailError = validateEmail(email);

    if (emailError) {
      setError(emailError);
      return;
    }

    if (!password) {
      setError("Please enter your password.");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (user) =>
        user.email.toLowerCase() === email.trim().toLowerCase() &&
        user.password === password,
    );

    if (!user) {
      setError("Invalid email or password.");
      return;
    }

    setError("");

    onLogin({
      name: user.name,
      email: user.email,
    });

    navigate("/");
  };

  return (
    <div
      className="container d-flex align-items-center justify-content-center"
      style={{ minHeight: "85vh" }}
    >
      <div
        className="card border-0 shadow-lg auth-card"
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
              <i className="bi bi-box-arrow-in-right fs-1"></i>
            </div>

            <h2 className="fw-bold mt-4 mb-2">Welcome Back</h2>

            <p className="text-muted">Login to continue shopping.</p>
          </div>

          {error && <div className="alert alert-danger">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fw-semibold">Email Address</label>

              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-envelope"></i>
                </span>

                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold">Password</label>

              <div className="input-group">
                <span className="input-group-text">
                  <i className="bi bi-lock"></i>
                </span>

                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError("");
                  }}
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-dark w-100 btn-lg fw-semibold"
            >
              <i className="bi bi-box-arrow-in-right me-2"></i>
              Login
            </button>
          </form>

          <div className="text-center mt-4">
            <small className="text-muted">Don't have an account?</small>

            <br />

            <Link to="/signup" className="fw-semibold text-decoration-none">
              Create Account →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
