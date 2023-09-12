import { Link } from "react-router-dom";
export function Header() {
  return (
    <header>
      <nav className="navbar" style={{ backgroundColor: "#F33A6A" }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Epicurean Express
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
              <a className="nav-link" href="/signup">
                Signup
              </a>
              <a className="nav-link" href="/login">
                Login
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
