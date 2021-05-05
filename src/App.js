import React from 'react'
import Navbar from './sections/Navbar/Navbar'
import navitems from "./json/navbar.json"
import Hero from './sections/Hero/Hero'
import SponserSec from './sections/SponserSec/SponserSec'
import Display from './sections/Display/Display'

const App = () => {
  return (
    <div className="App">
      {/* Navbar */}
<Navbar navitems={navitems}/>
      
     {/* Hero */}
<Hero/>

    {/* Partners */}
<SponserSec/>

      {/* Services Display */}

<Display/>

      {/* Work */}

      {/* Categories */}

      {/* Customer */}

      {/* Footer */}
    </div>
  )
}

export default App
