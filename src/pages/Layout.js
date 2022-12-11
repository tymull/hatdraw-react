import { Outlet, Link } from "react-router-dom";
import hatdrawLogo from "../images/hatdraw-logo.svg";

const Layout = () => {
  return (
    <>
      <header class="header sticky-top">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <img class="logo" src={hatdrawLogo} alt="logo" />
              <h1 class="logo-text">Hat Draw Machine</h1>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link class="nav-link" to="/">Home</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/exchange-hat">Exchange Hat</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/raffle-hat">Raffle Hat</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <Outlet />
    </>
  )
  // adding bootstrap just means adding this classes and the links on public/index.html
};

export default Layout;