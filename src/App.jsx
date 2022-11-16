import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './Components/header';
import Hero from './Components/hero';
import Banner from './Components/banner';
function App() {
  const [count, setCount] = useState(0)

  return (
     <div>
      <Header/>
      <Hero/>
      <Banner/>
     </div>
  )
}

export default App
