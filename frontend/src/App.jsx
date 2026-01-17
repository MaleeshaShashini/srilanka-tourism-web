import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './component/Navbar'
import Hero from './component/Hero'

function App() {

   const mockDestinations = [
       {
         id: 1,
         name: "Sigiriya Lion Rock",
         location: "Matale",
         description: "Ancient rock fortress and palace built by King Kashyapa.",
         imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Sigiriya_Rock.jpg"
       },
       {
         id: 2,
         name: "Ella Nine Arch Bridge",
         location: "Badulla",
         description: "A colonial-era railway bridge famous for its scenic beauty.",
         imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/bb/Nine_Arch_Bridge_Ella.jpg"
       },
       {
         id: 3,
         name: "Mirissa Beach",
         location: "Matara",
         description: "Famous for whale watching and surfing.",
         imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Mirissa_Beach.jpg"
       }
     ];

  const [destinations, setDestinations] = useState()

//   useEffect(() => {
//       fetch('http://localhost:8080/destinations')
//         .then(response => response.json())
//         .then(data => setDestinations(data))
//         .catch(error => console.error('Error fetching data:', error));
//     }, [])

  return (
   <div>
         <Navbar/>
         <Hero/>
    </div>
  );
}

export default App
