import { useEffect, useState } from 'react'
import './App.css'

import Hero from './component/Hero'

function App() {

  const [destinations, setDestinations] = useState()

//   useEffect(() => {
//       fetch('http://localhost:8080/destinations')
//         .then(response => response.json())
//         .then(data => setDestinations(data))
//         .catch(error => console.error('Error fetching data:', error));
//     }, [])

  return (
   <div>

         <Hero/>
    </div>
  );
}

export default App
