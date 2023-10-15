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
          <div className="row align-items-center">
            <div className="col-2 d-flex align-items-center">
              <h1>
                <Link className="text-white text-decoration-none d-flex align-items-center">
                  <i className="bi bi-amd mx-2"></i> Digitic.
                </Link>
              </h1>
            </div>
            <div className="col-5">
              <div className="input-group ">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search Product Here..."
                  aria-label="Search Product Here..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <i className="bi bi-search fs-6"></i>
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                    <Link className="text-decoration-none">
                    <i className="bi bi-arrow-repeat"></i>
                    <p>Compare <br /> Products</p>
                    </Link>
                </div>
                <div>
                    <Link>
                    <i class="bi bi-heart"></i>
                    <p>Favourite <br /> wishlist</p>
                    </Link>
                </div>
                <div>
                    <Link>
                    <i class="bi bi-person"></i>
                    <p>Log in <br /> My Account</p>
                    </Link>
                </div>
                <div>
                    <Link className="d-flex align-items-center gap-10">
                    <i class="bi bi-cart"></i>
                    <div className="d-flex flex-column">
                        <span className="badge bg-white text-dark">0</span>
                    </div>
                    </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
