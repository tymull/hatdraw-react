import { Outlet, Link } from "react-router-dom";
import hatdrawLogo from "../images/hatdraw-logo.svg";

const Layout = () => {
  return (
    <>
      <header className="header sticky-top">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img className="logo" src={hatdrawLogo} alt="Hat Logo" />
              <h1 className="logo-text">Hat Draw Machine</h1>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/exchange-hat">Exchange Hat</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/raffle-hat">Raffle Hat</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <Outlet />
    </>
  )
  // adding bootstrap just means adding this classNamees and the links on public/index.html
};

export default Layout;