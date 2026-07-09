import "./Contact.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact-section py-5">
      <div className="container">

        <h2 className="text-center mb-5">
          Contact Us
        </h2>

        <div className="row">

          {/* Contact Details */}

          <div className="col-lg-5">

            <div className="contact-info">

              <h4>Sharma Dairy Farm</h4>

              <p>
                <FaMapMarkerAlt /> Gwalior, Madhya Pradesh
              </p>

              <p>
                <FaPhoneAlt /> +91 8305285949
              </p>

              <p>
                <FaEnvelope /> anushka.rnsharma@gmail.com
              </p>

              <p>
                <FaClock /> 6:00 AM - 8:00 PM
              </p>

            </div>

          </div>

          {/* Contact Form */}

          <div className="col-lg-7">

            <form>

              <input
                type="text"
                placeholder="Your Name"
                className="form-control mb-3"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="form-control mb-3"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="form-control mb-3"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="form-control mb-3"
              ></textarea>

              <button className="btn btn-success">
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;