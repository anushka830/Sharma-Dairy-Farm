import "./Navbar.css";
import {
  FaHome,
  FaInfoCircle,
  FaShoppingBasket,
  FaImages,
  FaPhoneAlt,
  FaUser,
  FaShoppingCart,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success sticky-top shadow">
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand fw-bold fs-3" to="/">
          🥛 Sharma Dairy Farm
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                <FaHome className="me-2" />
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                <FaInfoCircle className="me-2" />
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/products">
                <FaShoppingBasket className="me-2" />
                Products
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/gallery">
                <FaImages className="me-2" />
                Gallery
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                <FaPhoneAlt className="me-2" />
                Contact
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/login">
                <FaUser className="me-2" />
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                <FaShoppingCart className="me-2" />
                Cart
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;