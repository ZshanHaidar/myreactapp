import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid nab_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <NavLink activeClassName="manu_active" to="/" className="navbar-brand" href="#">
                  BootStrap Website
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink activeClassName="manu_active"
                        to="/"
                        className="nav-link active"
                        aria-current="page"
                        href="#"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClassName="manu_active" to="/service" className="nav-link" href="#">
                        Services
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClassName="manu_active" to="/about" className="nav-link" href="#">
                        About
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClassName="manu_active" to="/contact" className="nav-link" href="#">
                        Contact
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
