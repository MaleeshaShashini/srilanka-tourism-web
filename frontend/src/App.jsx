import { useEffect, useState } from 'react'
import './App.css'

import Hero from './component/Hero'
import Destinations from './component/Destinations'
import Plan from './component/Plan'

function App() {

  const [destinations, setDestinations] = useState()


  return (
   <div>

         <Hero/>
         <Destinations/>
         <Plan/>
    </div>
  );
}

export default App
