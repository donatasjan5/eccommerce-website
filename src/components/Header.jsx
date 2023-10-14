import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="conatiner-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free Shipping Over $100 & Free Returns
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white">
                Hotline:{" "}
                <a className="text-white" href="tel: 86347123">
                  86347123
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="conatiner-xxl">
          <div className="row">
            <div className="col-2 d-flex align-items-center">
              <h1>
                <Link className="text-white text-decoration-none d-flex align-items-center">
                  <i className="bi bi-amd mx-2"></i> Digitic.
                </Link>
              </h1>
            </div>
            <div className="col-5">
              <div className="input-group mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text" id="basic-addon2">
                  @example.com
                </span>
              </div>
            </div>
            <div className="col-5"></div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
