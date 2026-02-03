import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    role: "Student",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setError("");
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // basic validation
    if (!form.email || !form.password) {
      setError("Please enter email and password.");
      return;
    }

    // demo login (UI only)
    alert(`Logged in as ${form.role}`);
    navigate("/"); // redirect to home
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow">
            <div className="card-body p-4">
              <h3 className="text-center mb-3">Login</h3>
              <p className="text-center text-muted mb-4">
                College Resource Share Management System
              </p>

              {error && (
                <div className="alert alert-danger py-2">{error}</div>
              )}

              <form onSubmit={handleSubmit}>
                {/* Role */}
                <div className="mb-3">
                  <label className="form-label">Login as</label>
                  <select
                    className="form-select"
                    name="role"
                    value={form.role}
                    onChange={handleChange}
                  >
                    <option>Student</option>
                    <option>Faculty</option>
                    <option>Admin</option>
                  </select>
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="example@gmail.com"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>

                {/* Password */}
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                  />
                </div>

                <button className="btn btn-dark w-100" type="submit">
                  Login
                </button>

                <div className="text-center mt-3">
                  <small className="text-muted">
                    Demo login only (backend not connected)
                  </small>
                </div>
              </form>
            </div>
          </div>

          <div className="text-center mt-3">
            <button
              className="btn btn-link"
              onClick={() => navigate("/")}
            >
              ← Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
