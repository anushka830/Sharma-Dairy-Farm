import { Link } from "react-router-dom";
import { useState } from "react";

function Login() {

  // State Variables
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle Form Submission
  const handleLogin = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);

    alert("Login Successful! (Frontend Only)");
  };

  return (
    <div className="container py-5">

      <div className="row justify-content-center">

        <div className="col-md-5">

          <div className="card shadow p-4">

            <h2 className="text-center text-success mb-4">
              Welcome Back
            </h2>

            <form onSubmit={handleLogin}>

              {/* Email */}

              <div className="mb-3">

                <label className="form-label">
                  Email Address
                </label>

                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

              </div>

              {/* Password */}

              <div className="mb-3">

                <label className="form-label">
                  Password
                </label>

                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

              </div>

              <button
                type="submit"
                className="btn btn-success w-100"
              >
                Login
              </button>

            </form>

            <p className="text-center mt-3">

              Don't have an account?{" "}

              <Link to="/register">
                Register
              </Link>

            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;