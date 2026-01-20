import { useEffect, useState } from 'react'
import './App.css'

import Hero from './component/Hero'
import Destinations from './component/Destinations'

function App() {

  const [destinations, setDestinations] = useState()


  return (
   <div>

         <Hero/>
         <Destinations/>
    </div>
  );
}

export default App
