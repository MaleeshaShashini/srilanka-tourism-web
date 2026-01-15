import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [destinations, setDestinations] = useState([])

  useEffect(() => {
      fetch('http://localhost:8080/destinations')
        .then(response => response.json())
        .then(data => setDestinations(data))
        .catch(error => console.error('Error fetching data:', error));
    }, [])

  return (
   <div className="container">
         {/* Hero Section */}
         <header className="hero">
           <h1>Discover the Wonder of Sri Lanka</h1>
           <p>Experience the untold magic of the pearl of the Indian Ocean.</p>
         </header>

         {/* Destinations Section */}
         <div className="card-grid">
           {destinations.map(destination => (
             <div key={destination.id} className="card">
               <img src={destination.imageUrl} alt={destination.name} className="card-img" />
               <div className="card-content">
                 <h2>{destination.name}</h2>
                 <p className="location">📍 {destination.location}</p>
                 <p className="description">{destination.description}</p>
               </div>
             </div>
           ))}
         </div>
       </div>
  )
}

export default App
