import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="conatiner-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <i className="bi bi-send-arrow-up-fill text-white fs-1"></i>
                <h2 className="mb-0 text-white">Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group ">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="conatiner-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                <address className="text-white fs-6">
                  Ukmergės gatvė, 167, Vilnius 05171, Lietuva
                </address>
                <a
                  href="tel:+3706213211"
                  className="mt-3 d-block mb-1 text-white text-decoration-none"
                >
                  +3706213211
                </a>
                <a
                  href="mailto:donatasjan5@gmail.com"
                  className="mt-2 d-block mb-0 text-white text-decoration-none"
                >
                  donatasjan5@gmail.com
                </a>
                <div className="social_icons d-flex align-items-center gap-15 mt-4">
                  <a href="">
                    <i className="bi bi-instagram text-white fs-4"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-facebook text-white fs-4"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-linkedin text-white fs-4"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-twitter-x text-white fs-4"></i>
                  </a>
                  <a href="">
                    <i className="bi bi-tiktok text-white fs-4"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white mb-1 py-2">Privacy Policy</Link>
                <Link className="text-white mb-1 py-2">Refund Policy</Link>
                <Link className="text-white mb-1 py-2">Shipping Policy</Link>
                <Link className="text-white mb-1 py-2">Terms & Conditons</Link>
                <Link className="text-white mb-1 py-2">Blogs</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white mb-1 py-2">About Us</Link>
                <Link className="text-white mb-1 py-2">FAQ</Link>
                <Link className="text-white mb-1 py-2">Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white mb-1 py-2">Laptops</Link>
                <Link className="text-white mb-1 py-2">Headphones</Link>
                <Link className="text-white mb-1 py-2">Tabletes</Link>
                <Link className="text-white mb-1 py-2">Watches</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="conatiner-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}: Powered by Developers
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
