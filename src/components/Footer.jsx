function Footer() {
  return (
    <footer className="bg-dark text-white mt-5">
      <div className="container py-5">
        <div className="text-center">
          <h3 className="fw-bold mb-2">
            <i className="bi bi-bag-check-fill text-warning me-2"></i>
            ShopEase
          </h3>

          <p className="text-white-50 mb-4">Modern shopping made simple.</p>

          <div className="d-flex justify-content-center gap-4 fs-4 mb-4">
            <a href="#" className="text-white" aria-label="Facebook">
              <i className="bi bi-facebook"></i>
            </a>

            <a href="#" className="text-white" aria-label="Instagram">
              <i className="bi bi-instagram"></i>
            </a>

            <a href="#" className="text-white" aria-label="LinkedIn">
              <i className="bi bi-linkedin"></i>
            </a>

            <a href="#" className="text-white" aria-label="Twitter">
              <i className="bi bi-twitter-x"></i>
            </a>
          </div>

          <p className="text-white-50 mb-4">
            <i className="bi bi-envelope me-2"></i>
            support@shopease.com
          </p>
        </div>

        <hr className="border-secondary" />

        <div className="text-center text-white-50">
          © 2026 <strong>ShopEase</strong>. All Rights Reserved.
          <br />
          <small>Built with React & Bootstrap ❤️</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
