import React from 'react';

function Footer() {
  return (
    <footer className="bg-success text-white pt-5 pb-4">
      <div className="container text-center text-md-start">
        <div className="row text-center text-md-start">

          {/* About Us Section */}
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <a className="navbar-brand page-title px-2" href="#"><img src="/img/Srilanka_logo.webp" alt="Logo" height="55"/></a>

            <h5 className="text-uppercase mb-4 font-weight-bold text-light">Travel Lanka</h5>
            <p className="text-light" style={{ fontSize: '15px' }}>
              We craft unforgettable Sri Lankan adventures tailored just for you. Explore the hidden gems of our beautiful island.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-light">Quick Links</h5>
            <p><a href="#" className="text-white text-decoration-none hover-link">Home</a></p>
            <p><a href="#destinations" className="text-white text-decoration-none hover-link">Destinations</a></p>
            <p><a href="#plan-trip" className="text-white text-decoration-none hover-link">Plan Trip</a></p>
            <p><a href="#" className="text-white text-decoration-none hover-link">View Packages</a></p>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3 text-light">
            <h5 className="text-uppercase mb-4 font-weight-bold text-light">Contact</h5>
            <p><i className="fas fa-home me-3"></i> Colombo, Sri Lanka</p>
            <p><i className="fas fa-envelope me-3"></i> info@travellanka.com</p>
            <p><i className="fas fa-phone me-3"></i> +94 11 234 5678</p>
            <p><i className="fas fa-mobile me-3"></i> +94 11 234 6668</p>
          </div>

        </div>

        <hr className="mb-4" />

        {/* Copyright and Social Media */}
        <div className="row align-items-center">
          <div className="col-md-7 col-lg-8 text-md-start">
            <p className="text-light">Copyright © 2026 All rights reserved by
              <strong className="text-light"> Travel Lanka (Pvt) Ltd.</strong>
            </p>
          </div>

          <div className="col-md-5 col-lg-4">
            <div className="text-center text-md-end">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <a href="#" className="btn-floating btn-sm text-white" style={{ fontSize: '23px' }}><i className="fab fa-whatsapp me-3" ></i></a>
                </li>

                <li className="list-inline-item">
                  <a href="#" className="btn-floating btn-sm text-white" style={{ fontSize: '23px' }}><i className="fab fa-facebook me-3"></i></a>
                </li>

                <li className="list-inline-item">
                  <a href="https://www.youtube.com/@MSFreeVibe" className="btn-floating btn-sm text-white" style={{ fontSize: '23px' }}><i className="fab fa-youtube me-3"></i></a>
                </li>

                <li className="list-inline-item">
                  <a href="#" className="btn-floating btn-sm text-white" style={{ fontSize: '23px' }}><i className="fab fa-instagram"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;