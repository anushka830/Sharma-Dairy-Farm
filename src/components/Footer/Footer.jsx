import "./Footer.css";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <div className="row">

          {/* Company */}

          <div className="col-lg-4 mb-4">

            <h3>🥛 Sharma Dairy Farm</h3>

            <p>
              Fresh and hygienic dairy products delivered directly from our farm
              to your doorstep.
            </p>

          </div>

          {/* Quick Links */}

          <div className="col-lg-2 mb-4">

            <h5>Quick Links</h5>

            <ul className="footer-links">

              <li><a href="#">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact</a></li>

            </ul>

          </div>

          {/* Contact */}

          <div className="col-lg-3 mb-4">

            <h5>Contact</h5>

            <p><FaPhoneAlt /> +91 8305285949</p>

            <p><FaEnvelope /> anushka.rnsharma@gmail.com</p>

            <p><FaMapMarkerAlt /> Gwalior, Madhya Pradesh</p>

          </div>

          {/* Social */}

          <div className="col-lg-3 mb-4">

            <h5>Follow Us</h5>

            <div className="social-icons">

              <a href="#"><FaFacebook /></a>

              <a href="#"><FaInstagram /></a>

              <a href="#"><FaLinkedin /></a>

            </div>

          </div>

        </div>

        <hr />

        <p className="copyright text-center">
          © 2026 Sharma Dairy Farm. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;