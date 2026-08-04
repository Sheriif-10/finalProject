import { NavLink, Link } from "react-router-dom";

function Navbar({ cartCount, user, logout }) {
  return (
    <nav
      className="navbar navbar-expand-lg sticky-top"
      style={{
        background: "rgba(15,23,42,.92)",
        backdropFilter: "blur(12px)",
        boxShadow: "0 8px 25px rgba(0,0,0,.08)",
      }}
    >
      <div className="container">
        <Link
          className="navbar-brand text-white d-flex align-items-center"
          to="/"
        >
          <div
            className="bg-warning rounded-circle d-flex justify-content-center align-items-center me-2"
            style={{
              width: "38px",
              height: "38px",
            }}
          >
            <i className="bi bi-bag-fill text-dark"></i>
          </div>

          <span className="fw-bold fs-4">ShopEase</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
        >
          <i className="bi bi-list text-white fs-2"></i>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <div className="navbar-nav me-auto ms-lg-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active text-warning" : "text-white"}`
              }
            >
              Home
            </NavLink>
          </div>

          <div className="d-flex align-items-lg-center flex-column flex-lg-row gap-2 mt-3 mt-lg-0">
            {user ? (
              <>
                <span className="text-light fw-semibold me-lg-2">
                  👋 Hi, {user.name}
                </span>

                <button className="btn btn-outline-light" onClick={logout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link className="btn btn-outline-light" to="/login">
                  Login
                </Link>

                <Link className="btn btn-warning fw-semibold" to="/signup">
                  Sign Up
                </Link>
              </>
            )}

            <Link to="/cart" className="btn btn-dark position-relative">
              <i className="bi bi-cart3 me-2"></i>
              Cart
              {cartCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
