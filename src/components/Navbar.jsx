
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
    const {user, logout}= useAuth()
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link className="navbar-brand" to="/">
          Shopeasy
        </Link>
        <div className="navbar-links">
          <Link className="navbar-link" to="/">
            Home
          </Link>
          <Link className="navbar-link" to="/checkout">
            Cart
          </Link>
        </div>

        <div className="navbar-auth">
          {!user ?(<div className="navbar-auth-links">
            <Link to="/auth" className="btn btn-secondary">
              Login
            </Link>
            <Link to="/auth" className="btn btn-primary">
              Signup
            </Link>
          </div>):(<div className="navbar-user">
            <span className="navbar-greeting">hello, {user.email}</span>
            <button className="btn btn-secondary" onClick={logout}>Logout</button>
          </div>)}
        </div>
      </div>
    </nav>
  );
}
