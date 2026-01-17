function Hero() {
    return(
        <div className="position-relative w-100 vh-100 overflow-hidden">

        <video
                autoPlay
                loop
                muted
                playsInline
                className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                style={{ zIndex: -1 }}
              >
              <source src="/video/hero-video.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
        </video>

        <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
              >
        </div>

        <div className="position-relative h-100 d-flex flex-column justify-content-center align-items-center text-center text-white p-4">
        <h1 className="display-1 fw-bold mb-3">
                  Discover the Wonder of Sri Lanka
                </h1>
        <p className="fs-4 mb-4 lead" style={{maxWidth: "800px"}}>
          Experience the untold magic of the pearl of the Indian Ocean.
        </p>

        <button className="btn btn-primary btn-lg rounded-pill px-5 py-3 fw-bold shadow">
                  Plan Your Journey
                </button>

               </div>
        </div>

        );
    }
export default Hero;