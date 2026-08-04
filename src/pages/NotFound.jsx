import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "85vh" }}
    >
      <div className="text-center">
        <i
          className="bi bi-exclamation-circle-fill text-warning"
          style={{ fontSize: "6rem" }}
        ></i>

        <h1 className="display-1 fw-bold mt-3">404</h1>

        <h3 className="fw-semibold mb-3">Oops! Page Not Found</h3>

        <p className="text-muted mb-4">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Link to="/" className="btn btn-dark btn-lg px-4">
          <i className="bi bi-house-door me-2"></i>
          Back Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
