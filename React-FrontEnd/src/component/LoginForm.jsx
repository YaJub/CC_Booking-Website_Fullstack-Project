import { useState } from "react";
import "../assets/stylesheet/LoginForm.css";
import { Link, Navigate } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add authentication logic here
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    } else {
      Navigate("/users");
    }
    setError("");
    alert(`Logged in as ${email}`);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        {error && <div className="error">{error}</div>}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="login-btn">
          Login
        </button>

        <Link to={"/register"}>Don't have an account? Register</Link>
      </form>
    </div>
  );
}
export default LoginForm;
