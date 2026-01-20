import React from 'react';
import DestinationCard from './DestinationCard';

function Destinations(){
    const destinations = [
           {
             image: "/img/beach.jpg",
             title:"Pristine Beaches",
             description:"Relax on golden sands and dive into the crystal clear blue waters."
           },
           {
              image: "/img/safari.jpg",
              title:"Wildlife Safaris",
              description:"Witness majestic elephants and leopards in their natural habitat."
           },
           {
               image: "/img/mountain.jpg",
               title:"Misty Mountains",
               description:"Escape to the cool highlands filled with lush tea plantations."
           },

           {
               image: "/img/rainforests.jpg",
               title:"Rainforests & Eco",
               description:"Trek through dense rainforests rich in biodiversity and nature."
           },

           {
               image: "/img/antiant.jpg",
               title:"Ancient Heritage",
               description:"Explore the majestic ruins and temples of ancient kingdoms."
           },

           {
               image: "/img/waterfall.webp",
               title:"Scenic Waterfall",
               description:"Discover the breathtaking beauty of cascading waterfalls."
           },

           {
                image: "/img/adventure.jpg",
                title:"Adventure & Thrills",
                description:"Experience surfing, hiking, and white-water rafting adventures."
           },

           {
                image: "/img/festival.jpg",
                title:"Cultural Festivals",
                description:"Witness vibrant traditions and grand cultural processions."
           },

           {
                image: "/img/train.jpg",
                title:"Scenic Train Journeys",
                description:"Enjoy world-famous scenic train rides through misty mountains."
           },
{
                image: "/img/colombo.jpg",
                title:"City Life & Shopping",
                description:"Experience the vibrant culture, shopping, and nightlife of Colombo."
           },
           {
                image: "/img/ayurvedic.jpg",
                title:"Wellness & Ayurveda",
                description:"Rejuvenate your mind and body with traditional healing therapies."
           },

           {
                image: "/img/food.jpg",
                title:"Flavors of Ceylon",
                description:"Savor authentic local cuisine and aromatic spice gardens."
           }
         ];
    return (
            <div className="container py-5" id="destinations">
                <div className="text-center mb-5">
                    <h2 className="fw-bold text-success display-5">Popular Destinations</h2>
                    <p className="lead text-muted">Explore the beauty of the paradise island</p>
                </div>

                <div className="row g-4">
                    {destinations.map((place, index) => (
                        <div key={index} className="col-12 col-md-6 col-lg-4">
                            <DestinationCard
                                image={place.image}
                                title={place.title}
                                description={place.description}
                            />
                        </div>
                    ))}
                </div>
            </div>
        );


    }
export default Destinations;