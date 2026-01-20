function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid ">
        <a className="navbar-brand page-title px-2" href="#"><img src="/img/Srilanka_logo.webp" alt="Logo" height="60"/></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active fw-bold" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link fw-bold" href="#destinations">Destinations</a>
            </li>
            <li className="nav-item">
                          <a className="nav-link fw-bold" href="#">About</a>
                        </li>
            <li className="nav-item">
                          <a className="nav-link fw-bold" href="#">Contact</a>
                        </li>
            <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
                          <a href="#" className="btn btn-success rounded-pill px-4 fw-bold btn-book">
                            Book Now
                          </a>
                        </li>
          </ul>

        </div>
      </div>
    </nav>
  );

}

export default Navbar;