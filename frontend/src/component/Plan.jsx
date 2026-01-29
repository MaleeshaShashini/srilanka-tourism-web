import React from 'react';

function Plan() {

  return (
      <section className="plan-custom-section" id="plan-trip">

            <div className="container position-relative text-center" >
                <h2 className="display-4 fw-bold mb-4" >Your Journey Begins Here</h2>
                <p className="lead mb-5 opacity-105 mx-auto" >Let us craft the perfect Sri Lankan adventure tailored just for you</p>

                <div className="d-flex flex-column flex-sm-row justify-content-center gap-3" >
                    <button className="btn btn-light btn-lg rounded-pill px-5 fw-bold shadow-lg" >Start Planning</button>
                    <button className="btn btn-outline-light btn-lg rounded-pill px-5 fw-bold" >View Packages</button>
                </div>
            </div>

      </section>
      );
  }
export default Plan;