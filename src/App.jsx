import { useState } from 'react'
import './App.css'
import Header from './Components/header';
import Hero from './Components/hero';
import Banner from './Components/banner';
import Section from './Components/section';
import Footer from './Components/footer';

function App() {
  return (
     <div>
      <Header/>
      <Hero/>
      <Banner/>
      <Section/>
      <Footer/>
     </div>
  )
}

export default App
