import { Link } from "react-router-dom";
import { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    // Validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      alert("Please fill all fields.");
      return;
    }

    if (formData.phone.length !== 10) {
      alert("Phone number must be 10 digits.");
      return;
    }

    if (formData.password.length < 8) {
      alert("Password must be at least 8 characters.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    console.log(formData);

    alert("Registration Successful! (Frontend Only)");
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">

        <div className="col-md-6">

          <div className="card shadow p-4">

            <h2 className="text-center text-success mb-4">
              Create Account
            </h2>

            <form onSubmit={handleRegister}>

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="form-control mb-3"
                value={formData.name}
                onChange={handleChange}
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-control mb-3"
                value={formData.email}
                onChange={handleChange}
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="form-control mb-3"
                value={formData.phone}
                onChange={handleChange}
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                className="form-control mb-3"
                value={formData.password}
                onChange={handleChange}
              />

              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="form-control mb-3"
                value={formData.confirmPassword}
                onChange={handleChange}
              />

              <button className="btn btn-success w-100">
                Register
              </button>

            </form>

            <p className="text-center mt-3">
              Already have an account?{" "}
              <Link to="/login">Login</Link>
            </p>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Register;