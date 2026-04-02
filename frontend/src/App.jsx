import { useEffect, useState } from 'react'
import './App.css'

import Hero from './component/Hero'
import Destinations from './component/Destinations'
import Plan from './component/Plan'
import Footer from './component/Footer'

function App() {

  const [destinations, setDestinations] = useState()


  return (
   <div>

         <Hero/>
         <Destinations/>
         <Plan/>
         <Footer/>
    </div>
  );
}

export default App
