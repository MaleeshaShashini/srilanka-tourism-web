import React from 'react';

function DestinationCard({ image, title, description }){
    return(
        <div className="card">

          <div className="overflow-hidden h-100 shadow-sm border-0 overflow-hidden destination-card">
                  <img
                    src={image}
                    className="card-img-top destination-img"
                    alt={title}
                  />
          </div>

          <div className="card-body">
            <h5 className="card-title fw-bold">{title}</h5>
            <p className="card-text text-muted"> {description}</p>
            <a href="#" className="btn btn-outline-success rounded-pill btn-sm">View Details</a>
          </div>
        </div>


        );

    }

export default DestinationCard;