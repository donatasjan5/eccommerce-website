import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="conatiner-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img
                  src="images/main-banner-1.jpg"
                  className="img-fluid rounded-3"
                  alt="banner"
                />
                <div className="main-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>Special Deal $999.99 or $27.51 per month</p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex gap-10 flex-wrap justify-contentbetween align-items-center">

              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-01.jpg"
                  className="img-fluid rounded-3"
                  alt="banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>Special Deal $999.99 or <br /> $27.51 per month</p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>

              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-02.jpg"
                  className="img-fluid rounded-3"
                  alt="banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>NEW ARRIVAL.</h4>
                  <h5>Buy iPad Pro</h5>
                  <p>Special Deal $999.99 or <br /> $27.51 per month</p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>

              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-03.jpg"
                  className="img-fluid rounded-3"
                  alt="banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>Special Deal $999.99 or <br /> $27.51 per month</p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>

              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-04.jpg"
                  className="img-fluid rounded-3"
                  alt="banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>SUPERCHARGED FOR PROS.</h4>
                  <h5>iPad S13+ Pro.</h5>
                  <p>Special Deal $999.99 or <br /> $27.51 per month</p>
                  <Link className="button">BUY NOW</Link>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Home;
